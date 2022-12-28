const express = require("express")
const Movie = require("../../models/Movie")
const verifyMiddleware = require("../../verify")
const router = express.Router()

router.post("/", verifyMiddleware, async(req, res) => {
    const {title, desc1, desc2, desc3, main_desc, image, image_title, image_sm, trailer, video, year, limit, genre, isSeries, duration} = req.body
    if(req.user.isAdmin){
        const newMovie = new Movie({
            title: title,
            desc1: desc1,
            desc2: desc2,
            desc3: desc3,
            main_desc: main_desc,
            year: year,
            limit: limit,
            genre: genre,
            duration: duration,
            image: image,
            image_title: image_title,
            image_sm: image_sm,
            trailer: trailer,
            video: video,
            isSeries: isSeries
        })
        const movie = await newMovie.save()
        return res.status(200).json({movie: movie})
    }else{
        return res.status(403).json("You are not allowed to do that")
    }
})

router.get("/", verifyMiddleware, async(req, res) => {
    if(req.user.isAdmin){
        const movies = await Movie.find()
        return res.status(200).json(movies)
    }else{
        return res.status(403).json("You are not allowed to do that")
    }
})

router.get("/random", verifyMiddleware, async(req, res) => {
    const type = req.query.type;
    let movie;
    try {
      if (type === "series") {
        movie = await Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
      } else {
        movie = await Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);
      }
      return res.status(200).json(movie);
    } catch (err) {
      return res.status(500).json(err);
    }
})

router.get("/:id", verifyMiddleware, async(req, res) => {
    const movie = await Movie.findById(req.params.id)
    return res.status(200).json(movie)
})

router.delete("/:id", verifyMiddleware, async(req, res)=>{
    if(req.user.isAdmin){
        const movieDelete = await Movie.findByIdAndDelete(req.params.id)
        return res.status(200).json("Movie is deleted successfully")
    }else{
        return res.status(403).json("You are not allowed to do that")
    }
})

module.exports = router