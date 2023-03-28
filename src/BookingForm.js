import React from "react";
import useForm from "./useForms";
import "./BookingForm.css";

const BookingForm = ({ navigate }) => {
    const {
        form,
        timeSlots,
        isFormValid,
        changeNameHandler,
        changeEmailHandler,
        changeDateHandler,
        changeTimeHandler,
        changeGuestsHandler,
        changeTableHandler,
        changeOccasionHandler,
        changeMessageHandler,
        submitHandler,

    } = useForm();
}

function handleSubmit() {
    const response = submitHandler();
    return response ? navigate("/booking-confirmation") : null;
}

return ( <
    form onSubmit = { handleSubmit }
    className = "reservation-form" >
    <
    div className = "column" >
    <
    label htmlFor = "name" >
    <
    p > Your Name < /p> <
    input value = { form.name }
    onChange = { changeNameHandler }
    type = "text"
    id = "name" /
    >
    <
    /label> <
    label htmlFor = "email" >
    <
    p > Your Email < /p> <
    input value = { form.email }
    onChange = { changeEmailHandler }
    type = "email"
    id = "email" /
    >
    <
    /label> <
    label htmlFor = "res-date" >
    <
    p > Choose Date < /p> <
    input value = { form.date }
    onChange = { changeDateHandler }
    type = "date"
    id = "date"
    placeholder = "Date" /
    >
    <
    /label> <
    label htmlFor = "res-time" >
    <
    p > Choose Time < /p> <
    select onChange = { changeTimeHandler }
    value = { form.time }
    id = "res-time" > {
        timeSlots.map((slot) => ( <
            option key = { slot }
            value = { slot } > { slot } <
            /option>
        ))
    } <
    /select> <
    /label> <
    /div> <
    div className = "column" >
    <
    label htmlFor = "guests" >
    <
    p > Number of Guests < /p> <
    input value = { form.numberOfGuests }
    onChange = { changeGuestsHandler }
    type = "number"
    placeholder = "1"
    min = "1"
    max = "8"
    id = "guests"
    required /
    >
    <
    /label> <
    label htmlFor = "occassion" >
    <
    p > Occassion < /p> <
    select value = { form.occassion }
    onChange = { changeOccassionHandler }
    id = "occassion" >
    <
    option value = "" > None < /option> <
    option value = "birthday" > Birthday < /option> <
    option value = "engagement" > Engagement < /option> <
    option value = "anniversary" > Anniversary < /option> <
    /select> <
    /label> <
    label htmlFor = "table" >
    <
    p > Table Preference < /p> <
    select value = { form.tablePreference }
    onChange = { changeTableHandler }
    id = "table" >
    <
    option value = "" > None < /option> <
    option value = "inside" > Inside < /option> <
    option value = "patio" > Patio < /option> <
    /select> <
    /label> <
    /div> <
    div className = "column" >
    <
    label htmlFor = "message" >
    <
    p > Any Requests ? < /p> <
    textarea value = { form.message }
    onChange = { changeMessageHandler }
    name = "message"
    id = "message"
    cols = "30"
    rows = "10" >
    < /textarea> <
    /label> <
    /div> <
    div className = "submit-container" >
    <
    button disabled = { isFormValid } > Reserve Your Table < /button> <
    /div> <
    /form>
);

export default BookingForm;