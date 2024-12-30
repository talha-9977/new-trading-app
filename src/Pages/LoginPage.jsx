
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the previous route the user tried to access
  const from = location.state?.from?.pathname || '/home';

  const loginUser = () => {
    setLoading(true);

//     // Make the login API request
  //   axios
  //     .post('http://127.0.0.1:5000/login', { email, password })
  //     .then((response) => {
  //       setLoading(false);

  //       if (response.data.token) {
  //         // Store the JWT token in localStorage on successful login
  //         localStorage.setItem('token', response.data.token);

  //         // Clear input fields
  //         setEmail('');
  //         setPassword('');

  //         // Navigate to the original route the user tried to access, or default to '/home'
  //         navigate(from, { replace: true });
  //       } else {
  //         setError('Invalid response from server');
  //       }
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setError('Invalid credentials, please try again');
  //     });
  // };
axios
      .post("http://127.0.0.1:5000/login", { email, password })
      .then((response) => {
        setLoading(false);

        if (response.data.token) {
          // Store the JWT token and email in localStorage on successful login
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", email);

          // Clear input fields
          setEmail("");
          setPassword("");

          // Navigate to the home page after successful login
          navigate("/home");

          // Reload the page to ensure fresh state
          window.location.reload();
        } else {
          setError("Invalid response from server");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("Invalid credentials, please try again");
      });
  };
  return (
    <div className="login-register-page relative flex justify-center items-center h-screen w-full">
      {/* Video Background */}
      <video className="background-video absolute top-0 left-0 w-full h-full object-cover " autoPlay loop muted>
        <source src="/v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dimming the background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md p-6 bg-black bg-opacity-30 rounded-lg shadow-lg">
        <div className="text-center">
          {/* Profile Icon */}
          <div className="profile-icon text-white text-5xl mb-4">
            <i className="bi bi-person-circle"></i>
          </div>
          <h2 className="text-white text-3xl mb-4">Login</h2>

          {/* Error Message */}
          {error && <p className="error-message text-red-500 mb-4">{error}</p>}

          {/* Email Input */}
          <div className="input-group mb-4">
            <input
              type="email"
              id="email"
              className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="input-group mb-6">
            <input
              type="password"
              id="password"
              className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={loginUser}
            disabled={loading}
            className="btn-primary w-full p-4 bg-blue-600 text-white text-xl rounded-lg shadow-md disabled:bg-gray-500 hover:bg-[#8B4513] focus:ring-4 focus:ring-blue-300"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Register Link */}
          <p className="text-center mt-4 text-white">
            Don't have an account?{' '}
            <a href="/register" className="text-[#c46522] hover:text-[#c46522]">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
