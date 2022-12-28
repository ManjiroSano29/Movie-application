const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    country:{
        type: String,
        required: true
    },

    phoneNumber:{
        type: Number,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpires: Date
})

const User = mongoose.model("User", userSchema)
module.exports = User