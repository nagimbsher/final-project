import React, { useState } from 'react';
import Navbar from './Navbar';
import MapComponent from './MapComponent';
import Airbnb from './Airbnb';
import RentalForm from './RentalForm';
import RentalList from './RentalList';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
  
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    
    setIsAuthenticated(false);
  };

  const handleRentalSubmit = () => {
    
  };

  return (
    <div className="App">
      <Navbar onLogout={handleLogout} />
      <Airbnb />

      {!isAuthenticated && (
        <>
          <LoginForm onLogin={handleLogin} />
          <SignUpForm />
        </>
      )}
      <>
    
      </>
      {isAuthenticated && (
        <>
          <RentalForm onRentalSubmit={handleRentalSubmit} />
          <RentalList />
        </>
      )}

      <MapComponent />
    </div>
  );
}

export default App;





