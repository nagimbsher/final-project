import React, { useState } from 'react';

function LoginPage() {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [signupForm, setSignupForm] = useState({ username: '', password: '', confirmPassword: '' });

  const handleLoginChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleSignupChange = (event) => {
    setSignupForm({ ...signupForm, [event.target.name]: event.target.value });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Implement login logic
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Implement signup logic
  };

  return (
    <div className="login-page-container">
      <div className="form-container">
        <form onSubmit={handleLoginSubmit} className="login-form">
          <h2>Sign in</h2>
          <input
            type="text"
            name="username"
            value={loginForm.username}
            onChange={handleLoginChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
        
        <form onSubmit={handleSignupSubmit} className="signup-form">
          <h2>Create Account</h2>
          <input
            type="text"
            name="username"
            value={signupForm.username}
            onChange={handleSignupChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={signupForm.password}
            onChange={handleSignupChange}
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={signupForm.confirmPassword}
            onChange={handleSignupChange}
            placeholder="Confirm Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
