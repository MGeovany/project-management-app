const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions')

const boardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    autopopulate:true
  },
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: `Add description here
    🟢 You can add multiline description
    🟢 Let's start...`
  },
  position: {
    type: Number
  },
  favourite: {
    type: Boolean,
    default: false
  },
  favouritePosition: {
    type: Number,
    default: 0,
    max:100
  },
  status:{
    type:String,
    default:"iniciado"
  }
}, schemaOptions)
boardSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Board', boardSchema)