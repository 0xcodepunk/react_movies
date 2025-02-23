import { Movie } from "./Movie";

function Movies({ movies }) {
    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))
            ) : (
                <h4>Ничего не найдено</h4>
            )}
        </div>
    );
}

export { Movies };
