import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Brajachaka</div>
            <ul className="nav-link">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Product">Product</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <button className="btn-nv">Download CV</button>
        </nav>
    );
};

export default Navbar;