
const {  StyleModel, LicenseModel } = require('../db/Models')


const PostStyle = async (req, res) => {
    const body = req.body
    console.log('PostStyle controller function reached')
    console.log('req.body: ', req.body)
    // const chosenLicense = req.body.license_name
    // try {
    //   LicenseModel.findOne({ license_name: chosenLicense })
    // } catch (error) {
    //     throw error
    // }
    const style = new StyleModel({
        html: body.html,
        css: body.css,
        creator: body.creator,
        style_name: body.style_name,
        license_name: body.license_name
        // upvote key not included--it should always default to 0
    })
    await style.save()
    await res.send({style})
}

const GetOneStyle = async (req, res) => {
  const style = await StyleModel.findById(req.body.style_id)
  res.send({ style })
}

const DeleteOneStyle = async (req, res) => {
    const styleToDelete = StyleModel.findOne({style_name: req.body.style_name})
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
  EditOneStyle
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
