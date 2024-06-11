import React from "react";

export default function About(){
    return(
        <div id="About">
            <h2 className="about--title">ABOUT ME</h2>
            <div className="about--content">
                <div className="about--content--top">
                    <img src="./images/alfine.png"></img>
                    <div className="paragraph">
                        <p>
                        Hello, my name is Alfine. I’m an Information System student at Binus University that focusing in Digital Technology. I’m passionate in programming and developing an application, either it's Web App or Mobile App. I love to develop an Application from scratch, such as creating the idea & concept, designing the UI & UX, and code the application.
                        </p>
                        <p>
                        I love to work together in team and able to get close with other person in the team. I’m also eager to learn many new things, especially things that related to technology.
                        </p>
                        <p className="noindent">
                        Here some information about me:
                        </p>
                    </div>
                </div>
                <div className="about--content--bottom">
                    <div className="skills">
                        <h3>Skills</h3>
                        <ul>
                            <li>Problem Solving</li>
                            <li>Mobile App (Swift, SwiftUI, Flutter, Java, XML)</li>
                            <li>Web App (HTML, CSS, JavaScript, PHP, ReactJS, JQuery)</li>
                            <li>Databases (Firebase, MySQL, PHPMyAdmin)</li>
                            <li>UI UX Design (Figma, Sketch, Canva)</li>
                            <li>Others (Visual Paradigm)</li>
                        </ul>
                    </div>
                    <div className="hobbies">
                        <h3>Hobbies</h3>
                        <ul>
                            <li>Sport</li>
                            <li>Music</li>
                            <li>Technology</li>
                            <li>Investment</li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1_t2Go7TKywf-pRXW62pOU2iSxseCOAnL/view?usp=share_link" className="about--downloadcv" target="_blank">DOWNLOAD CV</a>
        </div>
    )
}