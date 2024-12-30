


// import React from "react";
// import { AiOutlineHome, AiOutlineAreaChart } from "react-icons/ai";
// import { BiGift } from "react-icons/bi";
// import { RiWallet3Line } from "react-icons/ri";
// import { MdOutlineReceiptLong } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Footer = ({ onPromotionClick }) => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="fixed inset-x-0 bottom-0 bg-white shadow-lg border-t z-50">
//       <nav className="flex items-center justify-between px-6 py-2">
//         <div 
//           onClick={() => handleNavigation("/home")}
//           className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
//         >
//           <AiOutlineHome className="w-6 h-6 text-gray-500" />
//           <span className="text-xs mt-1 text-gray-500">Dashboard</span>
//         </div>

//         <div 
//           onClick={() => handleNavigation("/invest")}
//           className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
//         >
//           <AiOutlineAreaChart className="w-6 h-6 text-gray-500" />
//           <span className="text-xs mt-1 text-gray-500">Invest</span>
//         </div>

//         <div className="relative flex flex-col items-center">
//           <button
//             onClick={onPromotionClick}
//             className="absolute -top-8 w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 hover:scale-105"
//           >
//             <BiGift className="w-7 h-7 text-white" />
//           </button>
//           <span className="text-xs mt-8 text-gray-500">Promotion</span>
//         </div>

//         <div 
//           onClick={() => handleNavigation("/wallet")}
//           className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
//         >
//           <RiWallet3Line className="w-6 h-6 text-gray-500" />
//           <span className="text-xs mt-1 text-gray-500">Wallet</span>
//         </div>

//         <div 
//           onClick={() => handleNavigation("/transaction")}
//           className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
//         >
//           <MdOutlineReceiptLong className="w-6 h-6 text-gray-500" />
//           <span className="text-xs mt-1 text-gray-500">Transaction</span>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { AiOutlineHome, AiOutlineAreaChart } from "react-icons/ai";
import { BiGift } from "react-icons/bi";
import { RiWallet3Line } from "react-icons/ri";
import { MdOutlineReceiptLong } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = ({ onPromotionClick }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white shadow-lg border-t z-50">
      <nav className="flex items-center justify-between px-6 py-2">
        {/* Dashboard Tab */}
        <div 
          onClick={() => handleNavigation("/dashboard")}
          className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
        >
          <AiOutlineHome className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">Dashboard</span>
        </div>

        {/* Invest Tab */}
        <div 
          onClick={() => handleNavigation("/invest")}
          className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
        >
          <AiOutlineAreaChart className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">Invest</span>
        </div>

        {/* Promotion Button */}
        <div className="relative flex flex-col items-center">
          <button
            onClick={onPromotionClick}
            className="absolute -top-8 w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            <BiGift className="w-7 h-7 text-white" />
          </button>
          <span className="text-xs mt-8 text-gray-500">Promotion</span>
        </div>

        {/* Wallet Tab */}
        <div 
          onClick={() => handleNavigation("/wallet")}
          className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
        >
          <RiWallet3Line className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">Wallet</span>
        </div>

        {/* Transactions Tab */}
        <div 
          onClick={() => handleNavigation("/transactions")}
          className="flex flex-col items-center cursor-pointer transition-colors duration-200 hover:text-red-500"
        >
          <MdOutlineReceiptLong className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">Transactions</span>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
