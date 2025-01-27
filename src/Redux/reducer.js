import { First } from "react-bootstrap/esm/PageItem"
import { ADDFILM, DELETEFILM, EDITFILM, GETFILMS } from "./actiontype"

const initialState = {
  movies: []
}

const moviereducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADDFILM:
      return { ...state, movies: [...state.movies, payload] }
    case DELETEFILM:
      return { ...state, movies: state.movies.filter(movie => movie.id !== payload) }
    case EDITFILM:
      return { ...state, movies: state.movies.map(movie => movie.id === payload.id ? payload.data : movie) }
      case GETFILMS:
        return {...state,movies:payload.film}
    default:
      return state
  }
}
export default moviereducer