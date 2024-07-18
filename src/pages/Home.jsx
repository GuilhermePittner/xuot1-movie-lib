import { useState, useEffect } from "react";
import React from "react";

import MovieTemplate from "../components/MovieTemplate";
import './MovieGrid.css'

const api_url = process.env.REACT_APP_API_URL;
const api_key = process.env.REACT_APP_API_KEY;

const Home = () => {

    // creating an empty array
    const [bestMovies, setBestMovies] = useState([]);

    const getBestMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setBestMovies(data.results);
    }

    // this method will ocurr every
    // time the home is opened
    useEffect(() => {

        const searchApi = `${api_url}top_rated?${api_key}`;
        getBestMovies(searchApi);

    }, [])

    return (
        <div className="container">
            <h2 className="title">
                Top Rated Movies
            </h2>
            <div className="movies-container">
                
                {/* if result array === 0, then show loading spinner */}
                {bestMovies.length === 0 && <h2> Loading... </h2>}
                
                {/* if result array != 0, then show data */}
                {bestMovies.length > 0 &&
                    bestMovies.map((item) => <MovieTemplate key={item.id} data={item} /> )
                }

            </div>
        </div>
    )
}

export default Home
