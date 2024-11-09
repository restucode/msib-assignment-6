const Movie = ({ allMovie }) => {
    return (
        <div className="container">
            <h1 className="my-4">Show your favorite movies</h1>
            <div className="row">
                {allMovie.allMovie && allMovie.allMovie.map((movie, index) => (
                    <div style={{ width: '20%', padding: '20px', }} key={index}>
                        <div className="card">
                            <img src={movie.Poster} alt="" className="card-img-top" />
                            <div className="card-body text-center" style={{ backgroundColor : '#EC8305', color: 'white' }}>
                                <div className="card-text">{movie.Title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movie