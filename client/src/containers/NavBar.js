import React from 'react';
import {Link} from "react-router-dom";
import './navBar.css'

const NavBar = () =>(
  <ul className="navbar-ul">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/events">Events</Link></li>
    <li><Link to="/ranking">Ranking</Link></li>
    <li><Link to="/favourites">Favourites</Link></li>
  </ul>
);
export default NavBar;
