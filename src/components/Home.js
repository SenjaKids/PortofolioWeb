import React from "react";

export default function Home(){
    return(
        <div id="Home">
            <div className="home--left">
                <img src="./images/home-decoration.svg" className="home--left--decoration"></img>
                <h1 className="home--left--name">Hi! I'm Alfine;</h1>
                <h3 className="home--left--job">Mobile Developer</h3>
                <a className="home--left--button" href="#About">About Me</a>
            </div>
            <img src="./images/hi.svg" className="home--right"></img>
        </div>     
    )
}