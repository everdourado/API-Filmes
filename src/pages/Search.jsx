import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

//const searchUrl = import.meta.env.VITE_SEARCH;
//const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";


const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=331bc2971b202d503c875a3c4c6a48c4&query=${query}`;
        console.log(searchWithQueryURL);
        getSearchedMovies(searchWithQueryURL);
    }, [query]);


    return (
    <div className="container">
            <h2 className="title">
                Resultado para: <span className="query-text">{query}</span>
                </h2>
            <div className="movies-container">
                {movies.length > 0 && 
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Search;