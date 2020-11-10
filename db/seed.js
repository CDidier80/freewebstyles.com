const faker = require('faker')
const connection = require('./connection')
const { Types } = require('mongoose')
const { User, TravelLog, Comment } = require('./schema')
const bcrypt = require('bcrypt')

const genUsers = async () =>
  await Promise.all(
    new Array(50).fill().map(async () => ({
      _id: Types.ObjectId(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password_digest: await bcrypt.hash('1234', 1)
    }))
  )

const genComments = (users) =>
  new Array(500).fill().map(() => ({
    _id: Types.ObjectId(),
    comment: faker.lorem.sentences(),
    user_id: users[Math.floor(Math.random() * users.length)]._id
  }))
const genPosts = (comments, users) =>
  new Array(100).fill().map(() => ({
    _id: Types.ObjectId(),
    title: faker.random.words(),
    image_url: faker.random.image(),
    popularity_rating: faker.random.number(),
    description: faker.lorem.paragraph(),
    location: faker.address.city(),
    comments: comments
      .slice(
        Math.floor(Math.random() * comments.length),
        Math.floor(Math.random() * comments.length)
      )
      .map((c) => c._id),
    user_id: users[Math.floor(Math.random() * users.length)]._id
  }))

const seed = async () => {
  await connection.connect
  const users = await genUsers()
  const comments = genComments(users)
  const posts = genPosts(comments, users)
  await User.insertMany(users)
  await TravelLog.insertMany(posts)
  await Comment.insertMany(comments)
  await connection.disconnect
  process.exit()
}

seed()
