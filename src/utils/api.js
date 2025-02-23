const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = 'http://www.omdbapi.com/';


// Поиск фильмов по названию
export async function searchMoviesByTitle(title, type = 'movie') {
    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&type=${type}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}
