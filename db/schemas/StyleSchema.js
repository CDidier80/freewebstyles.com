const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    html: {type: String, required: true, index: true},  // user html
    css: {type: String, default: 0, required: true},    // user css
    creator: {type: Schema.Types.ObjectId, ref: 'styles', required: true},
    // creator: {type: String, required: true},   // a string version just for testing the posting of styles without needing a reference
    style_name: {type: String,required: true, index: true},  // style names should not be duplicated
    up_votes: {type: Number,default: 0,},
    license_name: {type: String, required: true},
    tags: [{type: String, required: true}],

    // for seeding content to db from 3rd party sources without accounts
    sourceWebsite: {type: String},
    sourceName: {type: String}
  },
  { timestamps: true }
)
