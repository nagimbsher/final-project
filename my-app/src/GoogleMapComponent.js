import { GoogleMap, Marker } from '@react-google-maps/api';
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
  
  const mapCenter = calculateMapCenter(listings);

  return (
    <GoogleMap
      mapContainerStyle={{ width: '10%vw', height: '10vh' }}
      zoom={5}
      center={mapCenter}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      
    >
      
      {listings && listings.map((listing) => (
        <Marker
          key={listing.id}
          position={{ lat: listing.latitude, lng: listing.longitude }}
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;



