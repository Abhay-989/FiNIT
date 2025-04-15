import React from 'react';
import Hero from "./Hero";
import AboutPage from '../About/AboutPage';
import ContactPage from '../Contact/ContactPage';
import EventPage from '../Events/EventPage';
function HomePage() {
    return ( <>
       <Hero/>
       <AboutPage/>
       <EventPage/>
       <ContactPage/>
       
       </>
         );
}

export default HomePage;