const express = require("express")
const MovieList = require("../../models/MovieList")
const verifyMiddleware = require("../../verify")
const router = express.Router()

router.post("/", verifyMiddleware, async(req, res) => {
    const {title, type, genre, film} = req.body
    if(req.user.isAdmin){
        const newMovieList = new MovieList({
            title: title,
            type: type,
            genre: genre,
            film: film
        })
        const list = await newMovieList.save()
        return res.status(200).json(list)
    }else{
        return res.status(403).json("You are not allowed to do that")
    }
})

router.delete("/:id", verifyMiddleware, async(req, res) => {
    if(req.user.isAdmin){
        const movieListDelete = await MovieList.findByIdAndDelete(req.params.id)
        return res.status(200).json("Delete list successfully")
    }else{
        return res.status(403).json("You are not allowed to do that")
    }
})

router.get("/", verifyMiddleware, async(req, res) => {
    const {type, genre} = req.query
    let list = []
    if(type){
        if(genre){
            list = await MovieList.aggregate([
                {$sample: {size: 10}},
                {$match: {type: type, genre: genre}}
            ])
        }else{
            list = await MovieList.aggregate([
                {$sample: {size: 10}},
                {$match: {type: type}}
            ])
        }
    }else{
        list = await MovieList.aggregate([
            {$sample: {size: 10}}
        ])
    }
    return res.status(200).json(list)
})

module.exports = router