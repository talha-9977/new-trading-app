import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/NavBar'; // Import Navbar
import Footer from './components/footers'; // Import Footer

const PrivateRoute = () => {
  const token = localStorage.getItem('token'); // Check for token in localStorage

  if (!token) {
    return <Navigate to="/login" replace />; // Redirect to login if no token
  }

  return (
    <>
      <Navbar /> {/* Navbar is only shown if the user is logged in */}
      <Outlet /> {/* Render child routes like /home, /dashboard */}
      <Footer /> {/* Footer is only shown if the user is logged in */}
    </>
  );
};

export default PrivateRoute;
