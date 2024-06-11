import React from "react";

export default function Contact(){
    return (
        <div id="Contact">
            <h2 className="contact--title">Get In Touch</h2>
            <p className="contact--info">Interested to hire me? Feel free to contact me!</p>
            <div className="contact--socmed">
                <a href="mailto:alfine10@gmail.com"><img src="./images\ic\email.svg" target="_blank"></img></a>
                <a href="https://www.linkedin.com/in/alfine22" target="_blank"><img src="./images\ic\linkedin.svg"></img></a>
                <a href="https://www.instagram.com/alfine.al22/" target="_blank"><img src="./images\ic\instagram.svg"></img></a>
                <a href="https://wa.me/6281280854901" target="_blank"><img src="./images\ic\whatsapp.svg"></img></a>
            </div>
        </div>
    );
}