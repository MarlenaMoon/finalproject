import React, { FC } from 'react';
import { StyleHTMLAttributes } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Booking from './Booking';
import Homepage from './Homepage';
import About from './About';
import BookingConfirmation from './BookingConfirmation';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials'
import Footer from './Footer';
import { useFormContext } from "react";



function App() {
    const { form } = useFormContext();

    const formProps = {
        name: form.name,
        date: form.date,
        time: form.time,
        guest: form.numberOfGuests,
        occassion: form.occassion,
        table: form.tablePreference,
        request: form.message,
    };

    return ( <
        BrowserRouter >
        <
        Nav / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Homepage / > }
        /> <
        Route path = "./Booking"
        element = { < Booking / > }
        /> <
        Route path = "./booking-confirmation"
        element = { < BookingConfirmation {...formProps }
            />} /
            >
            <
            /Routes> <
            Footer / >
            <
            /BrowserRouter>
        );
    };

    export default App;