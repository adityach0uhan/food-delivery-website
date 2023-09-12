const mongoose = require('mongoose')
const { schema } = require("Schema")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    date: {
        type: String,
        default:Date.now()
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    }
}) 

const user = mongoose.model("User", userSchema)
module.exports={user}