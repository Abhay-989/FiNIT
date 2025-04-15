// Loaderm.js
import React, { useEffect, useState } from 'react';
import Loader from './LandingPage/Loader'; 
import HomePage from './LandingPage/Home/HomePage';

function Loaderm() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
         <HomePage/>
        </div>
      )}
    </>
  );
}

export default Loaderm;
