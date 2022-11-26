const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {schemaUser}=require('./user')
const { schemaOptions } = require('./modelOptions')

const taskSchema = new Schema({
  section: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
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
  position: {
    type: Number
  },
  participants:[{
    type: Schema.Types.ObjectId,
    ref:'User',
    autopopulate:true
  }]
}, schemaOptions)
taskSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Task', taskSchema)