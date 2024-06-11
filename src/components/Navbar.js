import React from "react";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="navbar--logo">ALFINE'S PORTOFOLIO</h1>
            <div className="navbar--menu">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Portofolio">Portofolio</a>
                <a href="#Contact">Contact</a>
            </div>
        </nav>
    )
}