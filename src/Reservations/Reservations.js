import React from "react";
import './Reservations.css'
import Card from "../Card/Card";

const Reservations =( {reservations} ) => {
    const reservationCards = reservations.map(reservation => {
        return(
            <Card
                id={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                key={reservation.key}
            />
        )
    })
    return(
        <div className="reservations-container">
           {reservationCards}
        </div>
    )
}

export default Reservations