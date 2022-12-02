const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions')

const answerSchema = new Schema({
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
  comment:{
    type: Schema.Types.ObjectId,
    ref:'Comment',
    auntopopulate:true
  },
  date:{
    type:Date,
    default: Date.now
  }
}, schemaOptions)
answerSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Answer', answerSchema)