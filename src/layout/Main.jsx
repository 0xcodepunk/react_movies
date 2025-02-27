import React, {useState ,useEffect} from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";
import { searchMoviesByTitle } from "../utils/api";

const INITIAL_SEARCH = 'terminator';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSearch = (search, type) => {
        setLoading(true);
        searchMoviesByTitle(search, type)
            .then((data) => {
                const movies = data.Search || [];
                setMovies(movies);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке фильмов:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        handleSearch(INITIAL_SEARCH);
    }, [])

    return (
        <main>
            <div className="container content">
                <Search handleSearch={handleSearch} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </div>
        </main> 
    
    )
};

export {Main};
