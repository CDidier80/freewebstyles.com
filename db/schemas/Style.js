const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    html: {
      type: String,
      required: true
    },
    css: {
      type: String,
      default: 0,
      required: true
    },
    creator: {
    type: Schema.Types.ObjectId,
    ref: 'styles',
    required: true
    },
    style_name: {
      type: String,
      required: true
    },
    up_votes: {
      type: Number,
      default: 0,
    },
    license: {
      type: Schema.Types.ObjectId,
      default: null,
      required: true
    }
  },
  { timestamps: true }
)
