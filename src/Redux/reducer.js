import { First } from "react-bootstrap/esm/PageItem"
import { ADDFILM, DELETEFILM, EDITFILM } from "./actiontype"

const initialState = {
  movies: [

    {
      "id": 1,
      "title": "wanted",
      "genre": "Action",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_.jpg",
      "description": "A man is hired by the government to hunt down a notorious outlaw.",
      "year": 2008,
      "director": "James Mangold",

    },
    {
      "id": 2,
      "title": "The Shawshank Redemption",
      "genre": "Drama",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_QL75_UX500_CR0,47,500,281_.jpg",
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual",
      "year": 1994,
      "director": "Frank Darabont",

    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "genre": "Action",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      "description": "Batman, Gordon and Harvey Dent are initially working together to dismantle",
      "year": 2008,
      "director": "Christopher Nolan",
    },
  {
      "id": 4,
      "title": "Oppenheimer",
      "genre": "Thriller/Drama historique",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      "description": "Le film présente une narration non linéaire, entrelaçant différentes périodes de la vie de Robert Oppenheimer : ses années de Cambridge à Los Alamos, son audition de sécurité en 1954 et l'audition parlementaire de Strauss en 1959.",
      "year": 2023,
      "director": "Christopher Nolan",
    },
{
      "id": 3,
      "title": "The Dark Knight",
      "genre": "Action",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoWW0WSyBF1nE3kqbX3B8JzWOMPo-1NPvDw&s",
      "description": "Batman, Gordon and Harvey Dent are initially working together to dismantle",
      "year": 2008,
      "director": "Christopher Nolan",
    },
{
      "id": 3,
      "title": "The Dark Knight",
      "genre": "Action",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      "description": "Batman, Gordon and Harvey Dent are initially working together to dismantle",
      "year": 2008,
      "director": "Christopher Nolan",
    }


  ]
}

const moviereducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADDFILM:
      return { ...state, movies: [...state.movies, payload] }
    case DELETEFILM:
      return { ...state, movies: state.movies.filter(movie => movie.id !== payload) }
    case EDITFILM:
      return { ...state, movies: state.movies.map(movie => movie.id === payload.id ? payload.data : movie) }
    default:
      return state
  }
}
export default moviereducer