const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    username: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    password_digest: { type: String, required: true },
    liked_styles: [{ type: String, index: true }]
  },
  { timestamps: true }
)
