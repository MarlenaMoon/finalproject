import React from "react";

const BookingConfirmation = ({
    name,
    date,
    time,
    guests,
    occassion = false,
    table = false,
    request = false,
}) => {
    return ( <
        main >
        <
        section style = {
            { display: "flex", flexDirection: "column", gap: "0.5rem" } } >
        <
        h1 > Thank you
        for booking, { name }! < /h1> <
        /section> <
        /main>
    );
};

export default BookingConfirmation;