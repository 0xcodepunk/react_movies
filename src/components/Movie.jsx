function Movie({ movie }) {
    const {
        Title: title,
        Year: year,
        Type: type,
        Poster: poster
    } = movie;
    return <div className="card movie">
        <div className="card-image">
            {poster === 'N/A' ? <img src="https://placehold.co/278x396" alt={title} /> :
                <img src={poster} alt={title} />
            }
        </div>
        <div className="card-content">
            <span className="card-title">{title}</span>
            <p>
                <span>{year}</span>
                <span className="right">{type}</span>
            </p>
        </div>
    </div>
}

export { Movie };