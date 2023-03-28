import React from "react";
import { useNavigate } from "react-router-dom";
import restaurant from "finalproject/src/icons_assets/restaurant.jpg";
import BookingForm from "./BookingForm";
import "./Booking.css";

const Booking = () => {
    const navigate = useNavigate();

    return ( <
        main className = "booking" >
        <
        h1 > Booking < /h1> <
        section >
        <
        img src = { finalproject / src / icons_assets / restaurant.jpg }
        alt = "Patio Seating"
        style = {
            { borderRadius: "8px", width: "65%" } }
        /> <
        /section> <
        section >
        <
        BookingForm navigate = { navigate }
        /> <
        /section> <
        /main>
    );
};

export default Booking;