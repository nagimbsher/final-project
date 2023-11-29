





// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import MapComponent from './MapComponent';
// import Airbnb from './Airbnb';
// import RentalForm from './RentalForm';
// import RentalList from './RentalList';
// import SignUpForm from './SignUpForm';
// import LoginForm from './LoginForm';
// import ApartmentPage from './ApartmentPage';
// import {Routes,Route} from 'react-router-dom'
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

 
//   const handleRegistration = (token) => {
//     localStorage.setItem('authToken', token); 
//     setIsAuthenticated(true); 
//   };
//   const handleLogin = (token) => {
//     localStorage.setItem('authToken', token); 
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('authToken'); 
//     setIsAuthenticated(false);
//   };

//   const handleRentalSubmit = () => {
    
//   };

//   return (
//     <div className="App">
//       <Navbar onLogout={handleLogout} />
      
     

//       {!isAuthenticated ? (
//         <>
          
         
//         </>
//       ) : (
//         <>
//           <RentalForm onRentalSubmit={handleRentalSubmit} />
//           {/* <RentalList /> */}
//         </>
//       )}
// <Routes>
// <Route path="register" element={ <SignUpForm onRegistration={handleRegistration} />}/>
// <Route path="login" element={ <LoginForm onLogin={handleLogin} />}/>
// <Route path="listings" element={<Airbnb/>}/>
//   <Route path="listings" element={ <Airbnb />}/>
//   <Route path="apartment/:id" element={<ApartmentPage/>}/>
// </Routes>
//       {/* <MapComponent /> */}
//     </div>
//   );
// }

// export default App;




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





// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import RentalList from './RentalList';
// // Import other components

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//         < NavLink></NavLink>
//           {/* Navigation links using NavLink */}
//         </nav>
        
//         <Route path="/" exact component={RentalList} />
//         {/* Define other routes here */}
//       </div>
//     </Router>
//   );
// }

// export default App;














// import React from 'react';
// import Navbar from './Navbar';
// import MainComponent from './MainComponent';
// import AirbnbListings from './AirbnbListings';
// import RentalForm from './RentalForm';
// import RentalList from './RentalList';
// import RegistrationForm from './RegistrationForm';

// function App() {
//   const handleRentalSubmit = () => {
    
//     // Logic to handle rental form submission
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <AirbnbListings />
//       <RentalForm onRentalSubmit={handleRentalSubmit} />
//       <RentalList />
//       <MainComponent />
//       <RegistrationForm />
     
//     </div>
//   );
// }

// export default App;






// import React from 'react';
// import RentalList from './RentalList';
// import RentalForm from './RentalForm';
// import AirbnbListings from './AirbnbListings';
// import Navbar from './Navbar'
// import MainComponent from './MainComponent';


// function App() {
//   const handleRentalSubmit = () => {
//     // You might want to refresh the rental list here
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <MainComponent />
//       <AirbnbListings />
//       <RentalForm onRentalSubmit={handleRentalSubmit} />
//       <RentalList />
    
      
//     </div>
//   );
// }

// export default App;









// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Login from './Login';
// import RentalList from './RentalList';
// import Register from './Register';

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/Register">Register</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/rentals">Rentals</Link>
//       </nav>
//       <Switch>
//         <Route path="/Register" component={Register} />
//         <Route path="/login" component={Login} />
//         <Route path="/rentals" component={RentalList} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
////////////////////////////////////////////////////




