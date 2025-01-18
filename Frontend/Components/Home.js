import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Add some basic styles

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Building Made Simple</h1>
      <p>Your one-stop solution for building material quotations.</p>
      <div className="button-container">
        <Link to="/register" className="button">Get Started</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
    </div>
  );
}

export default Home;
