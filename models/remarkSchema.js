const mongoose = require("mongoose");

const remarkSchema = mongoose.Schema({
  remark: {
    type: String,
    required: true,
  },
  queryDate: {
    type: Date,
    required: true,
  },
  replyDate: {
    type: Date,
  },
});

const Remark=mongoose.model("Remark",remarkSchema);
module.exports=Remark;