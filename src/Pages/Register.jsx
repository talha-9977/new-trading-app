
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const registerUser = () => {
//     axios
//       .post('http://127.0.0.1:5000/signup', { email, password })
//       .then((response) => {
//         console.log(response.data);
//         navigate('/login'); // After successful registration, navigate to login
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Registration failed');
//       });
//   };

//   return (
//     <div className="login-register-page relative flex justify-center items-center h-screen w-full">
//       {/* Video Background */}
//       <video className="background-video absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
//         <source src="/backgroundvideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay for dimming the background */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

//       {/* Form Container */}
//       <div className="relative z-10 w-full max-w-md p-6 bg-black bg-opacity-60 rounded-lg shadow-lg">
//         <div className="text-center">
//           {/* Profile Icon */}
//           <div className="profile-icon text-white text-5xl mb-4">
//             <i className="bi bi-person-circle"></i>
//           </div>
//           <h2 className="text-white text-3xl mb-4">Register</h2>

//           {/* Email Input */}
//           <div className="input-group mb-4">
//             <input
//               type="email"
//               id="email"
//               className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password Input */}
//           <div className="input-group mb-6">
//             <input
//               type="password"
//               id="password"
//               className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={registerUser}
//             className="btn-primary w-full p-4 bg-blue-600 text-white text-xl rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
//           >
//             Register
//           </button>

//           {/* Login Link */}
//           <p className="text-center mt-4 text-white">
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-500 hover:text-blue-700">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Validation Functions
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    return regex.test(email);
  };

  const validatePhoneNumber = (number) => {
    const regex = /^\+880[0-9]{9}$/; // Regex for Bangladeshi phone numbers
    return regex.test(number);
  };

  const registerUser = () => {
    // Clear previous error messages
    setErrorMessage("");

    // Input Validations
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Please enter a valid Bangladeshi phone number (+880XXXXXXXXX).");
      return;
    }

    // API Request
    axios
      .post("http://127.0.0.1:5000/signup", {
        email,
        password,
        phoneNumber,
        inviteCode: inviteCode || null, // Set inviteCode to null if not provided
      })
      .then((response) => {
        console.log(response.data);
        navigate("/login"); // Navigate to login after successful registration
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.response?.data?.error || "Registration failed. Please try again.";
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="login-register-page relative flex justify-center items-center h-screen w-full">
      {/* Video Background */}
      <video className="background-video absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
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
          <h2 className="text-white text-3xl mb-4">Register</h2>

          {/* Display Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">
              {errorMessage}
            </div>
          )}

          {/* Email Input */}
          <div className="input-group mb-4">
            <input
              type="email"
              id="email"
              aria-label="Email address"
              className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="input-group mb-4">
            <input
              type="password"
              id="password"
              aria-label="Password"
              className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Phone Number Input */}
          <div className="input-group mb-4">
            <input
              type="text"
              id="phoneNumber"
              aria-label="Phone number"
              className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number (+880XXXXXXXXX)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Invite Code Input */}
          <div className="input-group mb-6">
            <input
              type="text"
              id="inviteCode"
              aria-label="Invite code (optional)"
              className="form-control w-full p-4 text-lg bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter invite code (optional)"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={registerUser}
            className="btn-primary w-full p-4 bg-blue-600 text-white text-xl rounded-lg shadow-md hover:bg-[#8B4513] focus:ring-4 focus:ring-blue-300"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 text-white">
            Already have an account?{" "}
            <a href="/login" className="text-[#c46522] hover:text-[#c46522]">
            Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
