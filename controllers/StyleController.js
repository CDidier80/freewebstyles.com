const { StyleModel, UserModel } = require('../db/Models')

// POST controller method
const PostStyle = async (req, res) => {
    const body = req.body
    console.log('PostStyle controller function reached')
    console.log('req.body: ', req.body)
    const creator = await UserModel.findOne({username: body.username})
    const style = new StyleModel({
        html: body.html,
        css: body.css,
        creator: creator._id,
        style_name: body.style_name,
        tags: body.tags
        // upvote key not included--it should always default to 0
    })
    await style.save()
    await res.send({style})
}

// GET controller methods
const GetOneStyle = async (req, res) => {
  // console.log("GetOneStyle() function reached in StyleController.js")
  const style_name = req.params.style_name
  // console.log("style_name value assigned by req.params.style_name: ", style_name)
  const style = await StyleModel.findOne({style_name: style_name})
  res.send({ style })
}

const GetManyRecentStyles = async (req, res) => {
  // console.log("GetManyRecentStyles() function reached in StyleController.js")
  const numToGet = parseInt(req.params.numToGet)
  // console.log("numToGet value assigned by req.params.numToGet: ", numToGet)
  const styles = await StyleModel.find().sort({ _id: -1 }).limit(numToGet)
  // console.log("Styles grouped for response by GetManyRecentStyles(): ", styles)
  res.send(styles)
}

// https://stackoverflow.com/questions/33627238/mongoose-find-with-multiple-conditions
const GetUsersRecentStyles = async (req, res) => {
  // console.log("GetManyRecentStyles() function reached in StyleController.js")
  const numToGet = parseInt(req.params.numToGet)
  const username =  req.params.currentUser
  const creator = await UserModel.findOne({username: username})
  // console.log("numToGet and currentUser values assigned by req.params: ", numToGet, username)
  const styles = await StyleModel.find({creator: creator._id}).sort({ _id: -1 }).limit(numToGet)
  // console.log("Styles grouped for response by GetManyRecentStyles(): ", styles)
  res.send(styles)
}


const GetManyLikedStyles = async (req, res) => { 
  // console.log("GetManyRecentStyles() function reached in StyleController.js")
  const numToGet = parseInt(req.params.numToGet)
  const username =  req.params.currentUser
  const currentUser = await UserModel.findOne({username: username})
  console.log("numToGet and currentUser values assigned by req.params: ", numToGet, currentUser)
  const styles = await StyleModel.find( {style_name: { $in : currentUser.liked_styles}}).sort({ _id: -1 }).limit(numToGet)
  // console.log("Styles grouped for response by GetManyLikedStyles(): ", styles)
  res.send(styles)
}


// DELETE controller method
const DeleteOneStyle = async (req, res) => {
    // console.log("DeleteOneStyle() controller reached in StyleController.js")
    // console.log("Value of req.params.style_name in DeleteOneStyle():", req.params.style_name)
    const styleToDelete = await StyleModel.findOne({style_name: req.params.style_name})
    // console.log("Style to delete in StyleController.js: ", styleToDelete)
    await StyleModel.deleteOne(styleToDelete)
    res.send({ msg: 'Style deleted' })
  }


const EditOneStyle = async (req, res) => {
  console.log("EditOneStyle controller function reached")
  console.log("value of Req.params.original_style_name in EditOneStyle() controller: ", req.params.original_style_name)
  console.log("Request body value received at EditOneStyle() controller: ", req.body)
  const styleNameToEdit = req.params.original_style_name
  const {tags, style_name} = req.body
  const style = await StyleModel.updateOne({
    style_name: styleNameToEdit},
    {
      ...req.body
    },
    { new: true, useFindAndModify: false }
  )
  res.send(style)

}

module.exports = {
  PostStyle,
  GetOneStyle,
  DeleteOneStyle,
  EditOneStyle, 
  GetManyRecentStyles,
  GetUsersRecentStyles,
  GetManyLikedStyles,

}







