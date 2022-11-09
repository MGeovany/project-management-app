const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    administrator:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    taxpayers:[ObjectId]
  },
  {
    collection: "Project",
  }
);

module.exports = mongoose.model("Project",projectSchema );