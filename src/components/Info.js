import React from "react";
import Photo from "../images/elo.jpg"

function Info () {
    return (
        <div>
            <img alt="Me" src={Photo}/>
            <h1>Elene Javakhishvili</h1>
            <h3>Front-end developer</h3>
            <h4>My.website</h4>
            <button><i class="fa-solid fa-envelope"></i>Email</button>
        </div>
    )
}

export default Info;