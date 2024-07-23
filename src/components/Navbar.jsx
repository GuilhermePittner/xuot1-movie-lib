import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import './Navbar.css'

const Navbar = () => {
    const [search, setSearch] = useState('');

    {/* 
        react hook to navigate (as the name states) to
        another page 
    */}
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        
        {/* prevent form submiting */}
        e.preventDefault();
        
        {/* we don't want an empty string */}
        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"> <BiCameraMovie/> xUoT1's films. </Link>
            </h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for movie..." onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit"> <BiSearchAlt2/> </button>
            </form>
        </nav>
    )
}

export default Navbar;