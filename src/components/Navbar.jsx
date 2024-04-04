import React from "react";
import Logo from "../MovieLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center">
      <img className="w-[70px]" src={Logo} />

      <Link to="/" className="text-blue-500 text-2xl text font-bold">
        Movies
      </Link>

      <Link to="/watchlist" className="text-blue-500 text-2xl font-bold">
        Watchlist
      </Link>
    </div>
  );
}

export default Navbar;
