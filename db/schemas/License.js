const { Schema } = require('mongoose')

// these will be seeded

module.exports = new Schema(
  {
    license_name: {
      type: String,
      required: true
    },
    license_content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
