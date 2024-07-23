import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieTemplate from "../components/MovieTemplate";

const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_SEARCH_API;

const Search = () => {

    {/* react hook to get query string value */}
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q');

    const [bestMovies, setBestMovies] = useState([]);

    const getBestMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setBestMovies(data.results);
    }

    // this method will ocurr every
    // time the home is opened
    useEffect(() => {

        const searchApi = `${api_url}query=${query}&${api_key}`;
        getBestMovies(searchApi);

    }, [query])

    return (
        <div className="container">
            <h2 className="title">
                Results for: <span className="query-text"> {query} </span>
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

export default Search
