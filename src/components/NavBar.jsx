import React from "react";
import { AiOutlineBell, AiOutlineDownload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login"); // Navigate back to the login page
    window.location.reload(); // Reload the page after logout
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-red-500 text-2xl font-bold">BOUNCEBIT</span>
        </div>

        {/* Right Section - Icons and Logout Button */}
        <div className="flex space-x-4 items-center">
          <button className="text-gray-600 hover:text-gray-800">
            <AiOutlineBell className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <AiOutlineDownload className="w-6 h-6" />
          </button>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800 font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
