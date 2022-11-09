const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    project:{type:mongoose.Schema.Types.ObjectId, ref:"Project"}
  },
  {
    collection: "Task",
  }
);

module.exports = mongoose.model("Task",taskSchema );