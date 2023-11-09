import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const apiKey = import.meta.env.KEY;
const moviesUrl = import.meta.env.API;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (uri) => {

        const res = await fetch(uri);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);

    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && 
                topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );  
};

export default Home;