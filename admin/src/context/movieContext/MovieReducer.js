const MovieReducer = (state, action) => {
    switch(action.type){
        case "MOVIE_START":
            return {
                movies: [],
                isFetching: true,
                error: false
            }

        case "MOVIE_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            }
        
        case "DELETE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        
        case "DELETE_MOVIE_SUCCESS":
            return {
                movies: state.movies.filter((movie) => movie._id !== action.payload),
                isFetching: false,
                error: false
            }

        case "CREATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }    
        
        case "CREATE_MOVIE_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false
            }
        
        case "UPDATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }    
        
        case "UPDATE_MOVIE_SUCCESS":
            return {
                movies: state.movies.map((movie) => movie._id === action.payload._id && action.payload),
                isFetching: false,
                error: false
            }
        
        default: 
            throw new Error("Invalid action")    
    }
}

export default MovieReducer