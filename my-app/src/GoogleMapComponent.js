import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
const calculateMapCenter = (listings) => {
  if (!listings || listings.length === 0) {
    return { lat: 0, lng: 0 }; 
  }
  
  const total = listings.reduce((acc, listing) => {
    return {
      lat: acc.lat + listing.latitude,
      lng: acc.lng + listing.longitude
    };
  }, { lat: 0, lng: 0 });

  return {
    lat: total.lat / listings.length,
    lng: total.lng / listings.length
  };
};

const GoogleMapComponent = ({ listings }) => {
  const [selectedListing, setSelectedListing] = useState(null);
  const mapCenter = calculateMapCenter(listings);

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100vh' }}
      zoom={13}
      center={mapCenter}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={{ lat: listing.latitude, lng: listing.longitude }}
          onClick={() => setSelectedListing(listing)}
        >
          {selectedListing === listing && (
            <InfoWindow onCloseClick={() => setSelectedListing(null)}>
              <div>
                <h3>{listing.apartment}</h3>
                <p>Price: ${listing.price}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;

