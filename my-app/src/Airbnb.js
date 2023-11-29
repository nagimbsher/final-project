import React, { useState, useEffect } from 'react';
import './Airbnb.css';
import ImageModal from './ImageModal';
import {Link} from 'react-router-dom'

function Airbnb() {
    const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchParams, setSearchParams] = useState({ city: '', state: '', country: '' });
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/airbnb')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setListings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const filterListings = () => {
    const { city, state, country } = searchParams;
    return listings.filter((listing) => {
      return (
        (!city || listing.city.toLowerCase() === city.toLowerCase()) &&
        (!state || listing.state.toLowerCase() === state.toLowerCase()) &&
        (!country || listing.country.toLowerCase() === country.toLowerCase())
      );
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredListings = filterListings();
    setListings(filteredListings);
    setNoMatch(filteredListings.length === 0);
  };


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="listing-container">
      <h1>TravelStay</h1>
      <form onSubmit={handleSearch} className="sticky-search-form">
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setSearchParams({ ...searchParams, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="State"
          onChange={(e) => setSearchParams({ ...searchParams, state: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setSearchParams({ ...searchParams, country: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      {noMatch && <div>No matching listings</div>}
      <ul>
        {listings.map((listing) => (
          <li key={listing.id} className="listing-item">
            <div className="listing-details">
              <h2><Link to={"/apartment/"+listing.apartment}>Apartment: {listing.apartment}</Link></h2>
              <p>Price: {listing.price}</p>
              <p>Location: {listing.location}</p>
            </div>
            {listing.images && listing.images.map((image, index) => (
              <div key={index} className="image-hover-zoom">
                <img
                  src={image}
                  alt={`Listing ${listing.id} Image ${index}`}
                  onClick={() => handleImageClick(image)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </li>
        ))}
      </ul>
      <ImageModal url={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

export default Airbnb;
