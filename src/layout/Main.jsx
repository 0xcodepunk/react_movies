import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";
import { searchMoviesByTitle } from "../utils/api";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        searchMoviesByTitle("terminator")
            .then((data) => {
                const movies = data.Search || [];
                this.setState({ movies, loading: false });
            })
            .catch((error) => {
                console.error("Ошибка при загрузке фильмов:", error);
            });
    }

    handleSearch = (search, type) => {
        this.setState({ loading: true });
        searchMoviesByTitle(search, type)
            .then((data) => {
                const movies = data.Search || [];
                this.setState({ movies, loading: false });
            })
            .catch((error) => {
                console.error("Ошибка при загрузке фильмов:", error);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main>
                <div className="container content">
                    <Search handleSearch={this.handleSearch} />
                    {loading ? <Preloader /> : <Movies movies={movies} />}
                </div>
            </main>
        );
    }
}

export { Main };
