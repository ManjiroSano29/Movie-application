import MovieReducer from "./MovieReducer"
import { createContext, useReducer } from "react"

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  error: false,
}

const MovieContext = createContext(INITIAL_STATE)

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE)

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieContextProvider }