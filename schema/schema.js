



import mongoose from "mongoose";
var Schema = mongoose.Schema({
  Title: String,
  Public: String,
  Username: String,
  All: String,
  Tech: String,
  DailyPost: String,
  Description: String,
  imgurl: String,
});



const User =new mongoose.model("user",Schema);

export default User;