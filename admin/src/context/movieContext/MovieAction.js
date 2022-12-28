const getMovieStart = () => ({
    type: "MOVIE_START",
})

const getMovieSuccess = (movies) => ({
    type: "MOVIE_SUCCESS",
    payload: movies,
})

const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START"
})

const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id
})

const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
})

const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
})

export {getMovieStart, getMovieSuccess, deleteMovieStart, deleteMovieSuccess, createMovieStart, createMovieSuccess }