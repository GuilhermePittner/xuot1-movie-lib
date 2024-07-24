import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import './Movie.css';

const api_url = process.env.REACT_APP_API_URL;
const api_key = process.env.REACT_APP_API_KEY;
const imageUrl = process.env.REACT_APP_SEARCH_IMG;

const Movie = () => {
    const [movieInfo, setMovieInfo] = useState(false);
    const movieId = useParams();

    const getMovieInfo = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovieInfo(data);

    }

    useEffect(() => {

        const searchApi = `${api_url}${movieId.id}?${api_key}`;
        getMovieInfo(searchApi);

    }, [])

    console.log(movieInfo);

    return (
        <div>

            <div className="movie-poster">
                <img src={imageUrl + movieInfo.poster_path} alt={movieInfo.title} />
                <h2>{movieInfo.title}</h2>
                <p><FaStar />{movieInfo.vote_average}</p>
                <p>{movieInfo.tagline}</p>
            </div>

            <div className="movie-overview">
                <div className="div-overview">
                    <h3> <BsWallet2 /> Budget:</h3>
                    <p>$ {movieInfo.budget.toLocaleString('pt-BR')}</p>
                </div>

                <div className="div-overview">
                    <h3> <BsGraphUp /> Revenue:</h3>
                    <p>$ {movieInfo.revenue.toLocaleString('pt-BR')}</p>
                </div>

                <div className="div-overview">
                    <h3> <BsHourglassSplit /> Duration:</h3>
                    <p>{movieInfo.runtime} minutes.</p>
                </div>

                <div className="div-overview">
                    <h3> <BsFillFileEarmarkTextFill /> Description:</h3>
                    <p>{movieInfo.overview}</p>
                </div>
            </div>

        </div>
    )
}

export default Movie
