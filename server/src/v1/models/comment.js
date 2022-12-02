const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions')

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    autopopulate:true
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  answers:[{
    type: Schema.Types.ObjectId,
    ref:'Answer',
    autopopulate:true
  }],
  date:{
    type:Date,
    default: Date.now
  }
}, schemaOptions)
commentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Comment', commentSchema)