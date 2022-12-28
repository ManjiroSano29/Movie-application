const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
const cors = require("cors")
const authRoute = require("./routes/auth/auth")
const userRoute = require("./routes/user/user")
const resetRoute = require("./routes/password/reset")
const movieRoute = require("./routes/movies/movies")
const movieListRoute = require("./routes/movie_list/movie_list")
const changeRoute = require("./routes/password/change")

app.use(cors())
mongoose.connect(process.env.MONGO_URL);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", authRoute)
app.use("/user", userRoute)
app.use("/movie", movieRoute)
app.use("/list", movieListRoute)
app.use("/", resetRoute)
app.use("/change", changeRoute)

app.get("/", (req, res) => {
    res.send("Hello guy")
})

app.listen(5000, () => {
    console.log("Server is starting at http://localhost:5000")
})