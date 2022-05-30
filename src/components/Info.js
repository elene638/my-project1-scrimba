import React from "react";
import Photo from "../images/3X4.jpg"

function Info () {
    return (
        <div className="main-info" >
            <img alt="Me" src={Photo}/>
            <h1 className="title" >Elene Javakhishvili</h1>
            <h3 className="info-text" >Front-end developer</h3>
            <h4 className="info" >My.website</h4>
            <button><i className="fa-solid fa-envelope"></i>Email</button>
        </div>
    )
}

export default Info;