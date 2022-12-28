import axios from "axios"
import { getMovieStart, getMovieSuccess, deleteMovieStart, deleteMovieSuccess, createMovieStart, createMovieSuccess, updateMovieStart, updateMovieSuccess } from "./MovieAction"

const getMovies = async(dispatch) => {
    dispatch(getMovieStart())
    const res = await axios.get("http://localhost:5000/movie", {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(getMovieSuccess(res.data))
}

const deleteMovie = async(id, dispatch) => {
    dispatch(deleteMovieStart())
    const res = await axios.delete("http://localhost:5000/movie/" + id, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(deleteMovieSuccess(id))
}

const createMovie = async(movie, dispatch) => {
    dispatch(createMovieStart())
    const res = await axios.post("http://localhost:5000/movie", movie, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(createMovieSuccess(res.data))
}


export { getMovies, deleteMovie, createMovie }