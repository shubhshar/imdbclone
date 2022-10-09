import "./Header.css";
import { React } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img
            className="img_header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="imDb logo"
          />
        </Link>
        <Link className="linkdeco" to="movies/popular">
          <span>Popular</span>
        </Link>
        <Link className="linkdeco" to="movies/top_rated">
          <span>Top Rated</span>
        </Link>
        <Link className="linkdeco" to="movies/upcoming">
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
