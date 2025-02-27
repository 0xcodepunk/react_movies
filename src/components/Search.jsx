import React, {useState} from "react";

const Search = (props) => {
    const {
        handleSearch = Function.prototype, 
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType]= useState('')


    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch(search, type);
        }
    };

    const handleTypeChange = (event) => {
            setType(event.target.value)
            handleSearch(search, event.target.value)
    };

    return (
        <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="Search"
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() =>
                            handleSearch(search, type)
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
                            checked={type === ""}
                            onChange={handleTypeChange}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value="movie"
                            checked={type === "movie"}
                            onChange={handleTypeChange}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value="series"
                            checked={type === "series"}
                            onChange={handleTypeChange}
                        />
                        <span>Series</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value="episode"
                            checked={type === "episode"}
                            onChange={handleTypeChange}
                        />
                        <span>Episode</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export { Search };
