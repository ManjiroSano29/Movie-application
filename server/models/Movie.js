const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    desc1: String,
    desc2: String,
    desc3: String,
    main_desc: String,
    image: String,
    image_title: String,
    image_sm: String,
    trailer: String,
    video: String,
    year: String,
    limit: String,
    genre: String,
    duration: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    isSeries: { type: Boolean, default: false }
})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie