import React, { useState } from "react";
import './LoginForm.css';
function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            onLogin(data.token); 
            alert('You have successfully signed in!');
        } else {
            console.error("Login failed.");
            alert('Login failed. Please check your username and password.');
        }
    } catch (error) {
        console.error("An error occurred:", error);
        alert('An error occurred during login. Please try again.');
    }
};

 
  return (
    <div className="login-form-container">
      <h2 className="login-form-header">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-button" type="submit">
        Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;




