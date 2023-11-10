import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css';
//const moviesURL = import.meta.env.VITE_API;
//const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=331bc2971b202d503c875a3c4c6a48c4';
        console.log(topRatedUrl);
        
        getTopRatedMovies(topRatedUrl);
        

    }, []);

    console.log(topMovies);

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length > 0 && 
                topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );  
};

export default Home;