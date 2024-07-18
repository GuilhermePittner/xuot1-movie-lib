import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageUrl = process.env.REACT_APP_SEARCH_IMG;

const MovieTemplate = ({ data, showLink = true }) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + data.poster_path} alt={data.title} />
            <h2>{data.title}</h2>
            <p>
                <FaStar /> {data.vote_average}
            </p>

            {/* if showLink, then create a link to detailed info route */}
            {showLink &&
                <Link to={`/movie/${data.id}`}>Details</Link>}
        </div>
    )
}

export default MovieTemplate;
