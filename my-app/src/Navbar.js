import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons"; 
import {faMugSaucer}  from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navItems">
          <button className="navButton">
            <FontAwesomeIcon icon={faBed} /> Bed
          </button>
          <button className="navButton">
            <FontAwesomeIcon icon={faAirbnb} /> Airbnb
          </button>
          <button className="navButton">
            <FontAwesomeIcon icon={faWifi} /> Wi-Fi
          </button>
          <button className="navButton">
          <FontAwesomeIcon icon={faMugSaucer} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;






// import "./navbar.css"

// const Navbar = () => {
//   return (
//     <div className="navbar">
//         <div className="navContainer">
//             <span className="logo">Airbnb</span>
//             <div className="navItems">
//                 <button className="navButton">Register</button>
                
//                 <button className="navButton">Login</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar