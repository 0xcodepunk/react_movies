import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "",
    };

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.props.handleSearch(this.state.search, this.state.type);
        }
    };

    handleBlur = () => {
        this.setState({ search: "" });
    };

    handleTypeChange = (event) => {
        this.setState(
            { type: event.target.value },
            () => this.props.handleSearch(this.state.search, this.state.type)
        );
    };

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="Search"
                            type="search"
                            value={this.state.search}
                            onChange={this.handleSearchChange}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() =>
                                this.props.handleSearch(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            Search
                        </button>
                    </div>
                    <div className="type-choice radio-group">
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value=""
                                checked={this.state.type === ""}
                                onChange={this.handleTypeChange}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="movie"
                                checked={this.state.type === "movie"}
                                onChange={this.handleTypeChange}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="series"
                                checked={this.state.type === "series"}
                                onChange={this.handleTypeChange}
                            />
                            <span>Series</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="episode"
                                checked={this.state.type === "episode"}
                                onChange={this.handleTypeChange}
                            />
                            <span>Episode</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
