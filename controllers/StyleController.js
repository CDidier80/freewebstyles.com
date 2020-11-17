
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
  console.log("GetOneStyle() function reached in StyleController.js")
  const style_name = req.params.style_name
  console.log("style_name value assigned by req.params.style_name: ", style_name)
  const style = await StyleModel.findOne({style_name: style_name})
  // const style = await StyleModel.findById(req.body.style_id)
  res.send({ style })
}


const GetManyRecentStyles = async (req, res) => {
  console.log("GetManyRecentStyles() function reached in StyleController.js")
  const numToGet = parseInt(req.params.numToGet)
  console.log("numToGet value assigned by req.params.numToGet: ", numToGet)
  const styles = await StyleModel.find().sort({ _id: -1 }).limit(numToGet)
  console.log("Styles grouped for response by GetManyRecentStyles(): ", styles)
  res.send(styles)
}


// https://stackoverflow.com/questions/33627238/mongoose-find-with-multiple-conditions
const GetUsersRecentStyles = async (req, res) => {
  console.log("GetManyRecentStyles() function reached in StyleController.js")
  const numToGet = parseInt(req.params.numToGet)
  const username =  req.params.currentUser
  const creator = await UserModel.findOne({username: username})
  console.log("numToGet and currentUser values assigned by req.params: ", numToGet, currentUser)
  const styles = await StyleModel.find({creator: creator._id}).sort({ _id: -1 }).limit(numToGet)
  console.log("Styles grouped for response by GetManyRecentStyles(): ", styles)
  res.send(styles)
}


const GetManyLikedStyles = async (req, res) => { 
  console.log("GetManyRecentStyles() function reached in StyleController.js")
  const numToGet = parseInt(req.params.numToGet)
  const username =  req.params.currentUser
  const currentUser = await UserModel.findOne({username: username})
  console.log("numToGet and currentUser values assigned by req.params: ", numToGet, currentUser)
  const styles = await StyleModel.find( {style_name: { $in : currentUser.liked_styles}}).sort({ _id: -1 }).limit(numToGet)
  console.log("Styles grouped for response by GetManyLikedStyles(): ", styles)
  res.send(styles)
}


// DELETE controller method
const DeleteOneStyle = async (req, res) => {
    const styleToDelete = await StyleModel.findOne({style_name: req.body.style_name})
    await StyleModel.deleteOne(styleToDelete)
    res.send({ msg: 'Style deleted' })
  }


const EditOneStyle = async (req, res) => {
  console.log("EditOneStyle controller function reached")
  console.log("Req.params.style_id: ", req.params.style_id)
  await StyleModel.findByIdAndUpdate(req.params.style_id,
    // the interpolated object below will be the updated document
    // It's intended to contain the updated version of the style sent by the client
    {
      ...req.body
    },
    { new: true, useFindAndModify: false }
    // (err, (d) => (err ? err : res.send(d)))     it was giving an err not defined error
  )
  res.send("Updated.")

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



// const DeleteStyle = async (req, res) => {
//     const styleName = StyleModel.findOne({style_name: req.body.style_name})
//     await StyleModel.deleteOne(styleName)
//     res.send({ msg: 'Style deleted' })
//   }
  










//   const { response } = require('express')
// const { User } = require('../db/schema')

// const GetPost = async (req, res) => {
//   const { page, limit } = req.query
//   const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
//   const posts = await TravelLog.find()
//     .limit(parseInt(limit))
//     .skip(offset)
//     .sort({ popularity_rating: 'desc' })
//   res.send({ results: posts.length, posts })
// }

// const GetPostById = async (req, res) => {
//   const post = await TravelLog.findById(req.params.post_id).populate([
//     {
//       model: 'users',
//       path: 'user_id',
//       select: '_id name'
//     },
//     {
//       path: 'comments',
//       populate: {
//         path: 'user_id',
//         model: 'users',
//         select: '_id name'
//       }
//     }
//   ])
//   res.send(post)
// }

// const CreatePost = async (req, res) => {
//   const newPost = new TravelLog({ ...req.body, user_id: req.params.user_id })
//   newPost.save()
//   res.send(newPost)
// }

// const DeletePost = async (req, res) => {
//   await Comment.deleteMany({ _id: { $in: post.comments } })
//   await TravelLog.findByIdAndDelete(req.params.post_id)
//   res.send({ msg: 'Post deleted' })
// }

// const UpdatePost = async (req, res) => {
//   await TravelLog.findByIdAndUpdate(
//     req.params.post_id,
//     {
//       ...req.body
//     },
//     { new: true, useFindAndModify: false },
//     (err, (d) => (err ? err : res.send(d)))
//   )
// }

// module.exports = {

//   GetPostById,
//   CreatePost,
//   DeletePost,
//   UpdatePost
// }
