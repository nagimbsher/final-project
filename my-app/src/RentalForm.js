import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

const AuthForm = () => {
  const [form, setForm] = useState({
    mode: 'register', // or 'login'
    username: '',
    password: '',
    customer_id: '',
    apartment_id: '',
    rental_start_date: '',
    rental_end_date: '',
    rental_price: '',
    rental_status: '',
    rental_notes: '',
  });

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('https://myserver-9ut2.onrender.com/airbnb');
        setApartments(response.data); // Assuming the data includes availability information
      } catch (error) {
        console.error('Error fetching apartments:', error);
      }
    };

    fetchApartments();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `http://localhost:3001/auth/${form.mode}`;
      const data = form.mode === 'register' ? {
        ...form
      } : {
        username: form.username,
        password: form.password,
      };

      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const switchMode = () => {
    setForm({ ...form, mode: form.mode === 'register' ? 'login' : 'register' });
  };

  return (
    <div className="form-container">
      <div className="auth-form">
        <button className="mode-switch-button" onClick={switchMode}>
          Switch to {form.mode === 'register' ? 'Login' : 'Register'}
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
          />
          {form.mode === 'register' && (
            <>
              <input
                type="text"
                name="customer_id"
                placeholder="Customer ID"
                value={form.customer_id}
                onChange={handleInputChange}
              />
              <select
                name="apartment_id"
                value={form.apartment_id}
                onChange={handleInputChange}>
                <option value="">Select Apartment ID</option>
                {apartments.map(apartment => (
                  <option key={apartment.id} value={apartment.id}>
                    Apartment: {apartment.id}
                  </option>
                ))}
              </select>
              <input
                type="date"
                name="rental_start_date"
                placeholder="Rental Start Date"
                value={form.rental_start_date}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="rental_end_date"
                placeholder="Rental End Date"
                value={form.rental_end_date}
                onChange={handleInputChange}
              />
              <select
                name="rental_price"
                value={form.rental_price}
                onChange={handleInputChange}>
                <option value="">Select Rental Price</option>
                {apartments.map(apartment => (
                  <option key={apartment.id} value={apartment.price}>
                    {apartment.price}
                  </option>
                ))}
              </select>
              <select
                   name="rental_status"
                   value={form.rental_status}
                   onChange={handleInputChange}>
                   <option value="">Select Rental Status</option>
                   {apartments.map(apartment => (
                     <option key={apartment.id} value={apartment.availability ? 'available' : 'not available'}>
                       {apartment.availability ? 'Available' : `Not Available, free after ${apartment.next_available_date || 'unknown'}`}
                     </option>
                   ))}
                 </select>
                 
              <textarea
                name="rental_notes"
                placeholder="Rental Notes"
                value={form.rental_notes}
                onChange={handleInputChange}
              />
            </>
          )}
          <button type="submit">{form.mode === 'register' ? 'Register' : 'Login'}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;















// import React, { useState } from 'react';
// import axios from 'axios';
// import './RentalForm.css'; 

// function RentalForm({ onRentalSubmit }) {
//   const [rentalData, setRentalData] = useState({
//     customer_id: '',
//     property_id: '',
//     rental_start_date: '',
//     rental_end_date: '',
//     rental_price: '',
//     rental_status: '',
//     rental_notes: '',
//   });
//   const [submissionSuccess, setSubmissionSuccess] = useState(false);

//   const handleChange = (event) => {
//     setRentalData({ ...rentalData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/renting', rentalData);
//       onRentalSubmit(); 
//       setSubmissionSuccess(true); 
//       setTimeout(() => {
//         window.location.href = '/login'; 
//       }, 3000); 
//     } catch (error) {
//       console.error('Error submitting the rental:', error);
//     }
//   };

//   if (submissionSuccess) {
//     return <p>Thank you, your registration is complete.</p>;
//   }

//   return (
    
//     <div className="rental-form-container">
//       <form onSubmit={handleSubmit} className="rental-form">
//         <label htmlFor="customer_id">Customer ID</label>
//         <input
//           type="number"
//           name="customer_id"
//           value={rentalData.customer_id}
//           onChange={handleChange}
//           placeholder="Customer ID"
//           required
//           className="form-input"
//         />

//         <label htmlFor="property_id">Property ID</label>
//         <select
//           name="property_id"
//           value={rentalData.property_id}
//           onChange={handleChange}
//           required
//           className="form-select"
//         >
//           <option value="">Select Property ID</option>
//           <option value="10">Apartment: 10</option>
//           <option value="8">Apartment: 8</option>
//           <option value="11">Apartment: 11</option>
//           <option value="9">Apartment: 9</option>
//           <option value="7">Apartment: 7</option>
//           <option value="6">Apartment: 6</option>
//           <option value="5">Apartment: 5</option>
         
//         </select>

//         <label htmlFor="rental_start_date">Start Date</label>
//         <input
//           type="date"
//           name="rental_start_date"
//           value={rentalData.rental_start_date}
//           onChange={handleChange}
//           required
//           className="form-input"
//         />

//         <label htmlFor="rental_end_date">End Date</label>
//         <input
//           type="date"
//           name="rental_end_date"
//           value={rentalData.rental_end_date}
//           onChange={handleChange}
//           required
//           className="form-input"
//         />

//         <label htmlFor="rental_price">Rental Price</label>
//         <select
//           name="rental_price"
//           value={rentalData.rental_price}
//           onChange={handleChange}
//           required
//           className="form-select"
//         >
//           <option value="">Select Price</option>
//           <option value="120.00">120.00</option>
//           <option value="150.00">150.00</option>
//           <option value="300.00">300.00</option>
//           <option value="100.00">100.00</option>
//           {/* Add other price options as needed */}
//         </select>

//         <label htmlFor="rental_status">Rental Status</label>
//         <select
//           name="rental_status"
//           value={rentalData.rental_status}
//           onChange={handleChange}
//           required
//           className="form-select"
//         >
//           <option value="">Select Status</option>
          
//           <option value="Available">Available</option>
//           <option value="Rented">Rented</option>
//           <option value="Maintenance">Maintenance</option>
          
//         </select>

//         <label htmlFor="rental_notes">Rental Notes</label>
//         <textarea
//           name="rental_notes"
//           value={rentalData.rental_notes}
//           onChange={handleChange}
//           placeholder="Enter any notes"
//           className="form-textarea"
//         />

//         <button type="submit" className="form-button">Submit Rental</button>
//       </form>
//     </div>
//   );
// }

    
 
// export default RentalForm;



