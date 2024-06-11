import React from "react";

export default function ProjectDetails(props){

    const currentData = props.currentData;

    const loadDetail = currentData.technology.map(d => {
        return (
            <div className="popUp--list--listItem">
                <h4>{d.category}</h4>
                {
                    d.items.map(items => {
                        return (
                            <div className="popUp--listItem--detail">
                                <img src={"./images/tech-ic/" + items.icon}></img>
                                <span>{items.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    })

    return (
        <>
            <div className="pageMask" onClick={props.popUpHandler}></div>
            <div className="popUp">
                <div className="popUp--left">
                    <img className="popUp--left--photo" src={"./images/projects cover/" + currentData.image}></img>
                    <h2 className="popUp--left--title">{currentData.name}</h2>
                    <p className="popUp--left--description">{currentData.about}</p>
                    {
                        currentData.button.length === 2 ?
                        <>
                            <a style={{backgroundColor: "#E49273"}} href={currentData.button[0].link} className="popUp--left--button" target="_blank">{currentData.button[0].name}</a>
                            <a style={{backgroundColor: "#7180AC"}} href={currentData.button[1].link} className="popUp--left--button" target="_blank">{currentData.button[1].name}</a>
                        </>

                        :     
                        <a style={{backgroundColor: "#E49273"}} href={currentData.button[0].link} className="popUp--left--button" target="_blank">{currentData.button[0].name}</a>
                    }
                </div>
                <div className="popUp--right">
                    <img onClick={props.popUpHandler} src="./images/ic/close.svg" className="close-popup" ></img>
                    <h3 className="popUp--right--title">TECHNOLOGY</h3>
                    <div className="popUp--right--list">
                        {loadDetail}
                    </div>
                </div>
            </div>
        </>
    )
}