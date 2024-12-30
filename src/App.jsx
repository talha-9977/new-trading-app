// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// // import Navbar from "./components/NavBar";
// // import Footer from "./components/footers";
// // import Home from "./Pages/HomePage";
// // import LoginPage from "./Pages/LoginPage";
// // import RegisterPage from "./Pages/Register";

// // function App() {
// //   const isAuthenticated = !!localStorage.getItem("token");

// //   return (
// //     <Router>
// //       <div className="App">
// //         {isAuthenticated ? (
// //           <div className="flex flex-col min-h-screen bg-gradient-to-br ">
// //             <Navbar />
// //             <div className="flex flex-grow pt-[80px]">
// //               <div className="flex-1 p-6">
// //                 <Routes>
// //                   <Route path="/home" element={<Home />} />
// //                   {/* Other routes */}
// //                 </Routes>
// //               </div>
// //             </div>
// //             <Footer />
// //           </div>
// //         ) : (
// //           <Routes>
// //             <Route path="/" element={<Navigate to="/login" replace />} />
// //             <Route path="/login" element={<LoginPage />} />
// //             <Route path="/register" element={<RegisterPage />} />
// //           </Routes>
// //         )}
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Navbar from "./components/NavBar";
// import Footer from "./components/footers";
// import Dashboard from "./Pages/Dashboard";
// import Invest from "./Pages/Invest";
// import Wallet from "./Pages/Wallet";
// import Transactions from "./Pages/Transactions";
// import LoginPage from "./Pages/LoginPage";
// import RegisterPage from "./Pages/Register";

// function App() {
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <Router>
//       <div className="App">
//         {isAuthenticated ? (
//           <div className="flex flex-col min-h-screen bg-gradient-to-br">
//             <Navbar />
//             <div className="flex flex-grow pt-[80px]">
//               <div className="flex-1 p-6">
//                 <Routes>
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/invest" element={<Invest />} />
//                   <Route path="/wallet" element={<Wallet />} />
//                   <Route path="/transactions" element={<Transactions />} />
//                   <Route path="*" element={<Navigate to="/dashboard" replace />} />
//                 </Routes>
//               </div>
//             </div>
//             <Footer />
//           </div>
//         ) : (
//           <Routes>
//             <Route path="/" element={<Navigate to="/login" replace />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/footers";
import Dashboard from "./Pages/Dashboard";
import Invest from "./Pages/Invest";
import Wallet from "./Pages/wallet";
import Transactions from "./Pages/Transactions";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/Register";

function App() {
  // For development, set this to true to bypass authentication
  const isAuthenticated = true; // Changed this line to always be true

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <div className="flex flex-col min-h-screen bg-gradient-to-br">
            <Navbar />
            <div className="flex flex-grow pt-[80px]">
              <div className="flex-1 p-6">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/invest" element={<Invest />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
