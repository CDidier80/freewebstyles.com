const { response } = require('express')
const { TravelLog, User, Comment } = require('../db/schema')

const GetPosts = async (req, res) => {
  const { page, limit } = req.query
  const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
  const posts = await TravelLog.find()
    .limit(parseInt(limit))
    .skip(offset)
    .sort({ popularity_rating: 'desc' })
  res.send({ results: posts.length, posts })
}

const GetPostById = async (req, res) => {
  const post = await TravelLog.findById(req.params.post_id).populate([
    {
      model: 'users',
      path: 'user_id',
      select: '_id name'
    },
    {
      path: 'comments',
      populate: {
        path: 'user_id',
        model: 'users',
        select: '_id name'
      }
    }
  ])
  res.send(post)
}

const CreatePost = async (req, res) => {
  const newPost = new TravelLog({ ...req.body, user_id: req.params.user_id })
  newPost.save()
  res.send(newPost)
}

const DeletePost = async (req, res) => {
  await Comment.deleteMany({ _id: { $in: post.comments } })
  await TravelLog.findByIdAndDelete(req.params.post_id)
  res.send({ msg: 'Post deleted' })
}

const UpdatePost = async (req, res) => {
  await TravelLog.findByIdAndUpdate(
    req.params.post_id,
    {
      ...req.body
    },
    { new: true, useFindAndModify: false },
    (err, (d) => (err ? err : res.send(d)))
  )
}

module.exports = {
  GetPosts,
  GetPostById,
  CreatePost,
  DeletePost,
  UpdatePost
}
