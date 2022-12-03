const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions')

const blogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    autopopulate:true
  },
  content: {
    type: String,
    default: ''
  },
  date:{
    type:Date,
    default: Date.now
  }
}, schemaOptions)

blogSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Blog', blogSchema)