const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    "title" :{type:String, required: true},
    "body" : {type:String, required: true},
    "user" : {ref: "user"}
})

const Post = mongoose.model("user",PostSchema);

module.exports = Post;