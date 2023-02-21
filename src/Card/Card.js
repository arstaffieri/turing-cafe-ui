import React from "react";
import './Card.css'

const Card = ( {id, name, date, time, number} ) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Date: {date}</p>
            <p>Time: {time}pm</p>
            <p>Number: {number}</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card