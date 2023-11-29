import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApartmentList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/apartments'); 
        setApartments(response.data);
      } catch (error) {
        console.error('There was an error fetching the apartments:', error);
      }
    };

    fetchApartments();
  }, []);

  return (
    <div>
      {apartments.map(apartment => (
        <div key={apartment.id}>
          <p>Apartment ID: {apartment.id}</p>
          <p>Location: {apartment.location}</p>
          <p>Status: {apartment.isAvailable ? 'Available' : 'Not Available'}</p>
        </div>
      ))}
    </div>
  );
}

export default ApartmentList;



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from 'react';

// const ApartmentPage = () => {
//     const params = useParams();
//     const [apartmentData, setApartmentData] = useState(null);

//     useEffect(() => {
//         const fetchListingInfo = async () => {
//             try {
//                 const res = await fetch(`http://localhost:3001/apartments/${params.id}`);
//                 if (!res.ok) {
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }
//                 const data = await res.json();
//                 setApartmentData(data);
//             } catch (error) {
//                 console.error("Fetching error: ", error);
//             }
//         };

//         fetchListingInfo();
//     }, [params.id]);

//     return (
//         <div>
//             Hello, this is the page of apartment {params.id}
//             {apartmentData && <div>{/* Display your apartment data here */}</div>}
//         </div>
//     );
// };

// export default ApartmentPage;




// import { useParams } from "react-router-dom";
// import {useEffect,useState} from 'react'
// const ApartmentPage= ()=>{
//     const params=useParams()
//     console.log(params)
//     useEffect(()=>{
//         const fetchListingInfo= async()=>{
//             cont res=await fetch("localhost:3001/id")
//         }
//     },[])
//     return(
//         <div>Hello, this is the page of apartment {params.id}</div>
//     )
// }
// export default ApartmentPage