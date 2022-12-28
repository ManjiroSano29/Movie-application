const { mode } = require("crypto-js")
const mongoose = require("mongoose")
const movieListSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    film: { type: Array }    
})

const MovieList = mongoose.model("MovieList", movieListSchema)
module.exports = MovieList