import React from "react";
import data from "../projects.json";

export default function Portofolio(props){

    const [topic, setTopic] = React.useState("mobile");

    let currentData;
    if(topic === "web"){
        currentData = data.web;
    }else if(topic === "mobile"){
        currentData = data.mobile;
    }

    const projectData =  currentData.map((d) => {
        return (
            <div className="card">
                <img src={"./images/projects cover/" + d.image}></img>
                <div className="card--info">
                    <div>
                        <h5 className="card--title">{d.name}</h5>
                        <p className="card--description">{d.description}</p>
                        <h6 className="card--role">Role:</h6>
                        <ul className="card--roledata">
                            {d.role.map((r) => {
                                return (
                                    <li>{r}</li>
                                );
                            })}
                        </ul>
                    </div> 
                    <div className="card--button" onClick={() => props.popUpHandler(d)}>SEE PROJECT DETAILS</div>
                </div>
            </div>
        );    
    });

    return (
        <div id="Portofolio">
            <div className="portofolio--header">
                <div className="portofolio--header--title">
                    <h2>PORTOFOLIO</h2>
                    <h5>Featured Projects</h5>
                </div>
                <a href="#Contact" className="portofolio--header--button">CONTACT ME</a>
            </div>
            <div className="portofolio--content">
                <div className="portofolio--content--topic">
                    <div className={topic === "mobile" ? "selected" : undefined}onClick={() => setTopic("mobile")}>Mobile Application</div>
                    <div className={topic === "web" ? "selected" : undefined} onClick={() => setTopic("web")}>Web Application</div>
                </div>
                <hr></hr>
                <div className="portofolio--content--projects">
                    {projectData}
                </div>
            </div>
        </div>
    )
}