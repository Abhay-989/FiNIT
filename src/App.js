import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./LandingPage/Home/HomePage";
import ContactPage from "./LandingPage/Contact/ContactPage";
import EventPage from "./LandingPage/Events/EventPage";
import AboutPage from "./LandingPage/About/AboutPage";
import TeamPage from "./LandingPage/Team/TeamPage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import Loader from "./LandingPage/Loader"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
     <Footer />
    </>
  );
}

export default App;
