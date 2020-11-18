const { Schema } = require('mongoose')

module.exports = new Schema(
  {      
    html: {type: String, required: true, index: true},  
    css: {type: String, default: 0, required: true},   
    creator: {type: Schema.Types.ObjectId, ref: 'users', required: true},
    style_name: {type: String,required: true, index: true},  
    up_votes: {type: Number,default: 0,},
    tags: [{type: String, required: true}],
    sourceWebsite: {type: String},
    sourceName: {type: String}
  },
  { timestamps: true }
)
