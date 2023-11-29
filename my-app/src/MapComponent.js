import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import GoogleMapComponent from './GoogleMapComponent';
import './MapComponent.css';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapComponent = ({ listings = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search for:', searchTerm);
  };

  const filteredListings = listings.filter(listing =>
    listing.apartment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="listing-container">
    
      <div className="search-bar sticky-search-bar">
        <input type="text" placeholder="Search listings" value={searchTerm} onChange={handleSearchChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="main-content">
        {filteredListings.map(listing => (
          <div key={listing.id}>
            <h3>{listing.apartment}</h3>
          </div>
        ))}
      </div>
      <div className="google-map-container">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMapComponent listings={filteredListings} />
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;


