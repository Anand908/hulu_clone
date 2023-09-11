import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3/movie';

const getPopularMovies = async () => await axios.get(movieBaseURL+"/popular?api_key="+import.meta.env.VITE_API_KEY);

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key='+import.meta.env.VITE_API_KEY;

const getMovieByGenreId = async (id) => await axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default {
    getPopularMovies,
    getMovieByGenreId
}