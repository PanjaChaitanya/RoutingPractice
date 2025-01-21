import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <div className="container">
        <h2>Welcome to the Home Page</h2>
        <div className="buttons">
          <button onClick={() => navigate('/login')} className="action-button">Login</button>
          <button onClick={() => navigate('/register')} className="action-button">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Home;