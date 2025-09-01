const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  personalInfo: {
    dob: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    fatherName: { type: String },
    address: {
      line1: String,
      line2: String,
      city: String,
      state: String,
      pincode: String,
    },
  },
  gst: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Gst",
    },
  ],
  it: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "It",
    },
  ],
  audit: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Audit",
    },
  ],
  created_date: {
    type: Date,
    default:Date.now,
    required: true,
  },
});
const User = mongoose.model("User", UserSchema);
export default User;
