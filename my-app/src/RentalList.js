import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RentalList() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await axios.get('http://localhost:3001/renting');
        setRentals(response.data);
        setLoading(false);
      } catch (error) {
        console.error('There was an error fetching the rentals:', error);
        setError('Failed to fetch rentals.');
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  if (loading) {
    return <p>Loading rentals</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {rentals.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer ID</th>
              <th>Property ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rentals.map(rental => (
              <tr key={rental.rental_id}>
                <td>{rental.rental_id}</td>
                <td>{rental.customer_id}</td>
                <td>{rental.property_id}</td>
                <td>{rental.rental_start_date}</td>
                <td>{rental.rental_end_date}</td>
                <td>{rental.rental_price}</td>
                <td>{rental.rental_status}</td>
                <td>{rental.rental_notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rentals available.</p>
      )}
    </div>
  );
}

export default RentalList;
