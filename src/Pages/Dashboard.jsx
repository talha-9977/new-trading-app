// import React, { useEffect, useRef } from "react";
// import { AiOutlineWallet } from "react-icons/ai";

// // Dashboard Component
// const Dashboard = () => {
//   // Example data for Wallet Balance
//   const walletBalance = 1200.5; // Dynamic value
//   const currency = "USD";

//   // Example data for Active Investments
//   const investments = [
//     { name: "Crypto Fund", amount: 500, status: "Active" },
//     { name: "Stock Portfolio", amount: 300, status: "Active" },
//   ];

//   const chartContainer = useRef();

//   // Effect to load TradingView chart script dynamically
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
//     script.type = 'text/javascript';
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "symbol": "BINANCE:BTCUSDT",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "light",
//         "style": "1",
//         "locale": "en",
//         "allow_symbol_change": true,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }
//     `;
    
//     if (chartContainer.current) {
//       chartContainer.current.appendChild(script);
//     }

//     return () => {
//       if (chartContainer.current) {
//         chartContainer.current.innerHTML = ''; // Clean up chart on unmount
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-4">
//       {/* Wallet Balance Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
//           <AiOutlineWallet className="text-gray-600" />
//           Wallet Balance
//         </h2>
//         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//           <p className="text-lg font-medium">
//             Current Balance:{" "}
//             <span className="text-green-500 font-bold">
//               {currency} {walletBalance.toFixed(2)}
//             </span>
//           </p>
//         </div>
//       </section>

//       {/* Active Investments Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Active Investments</h2>
//         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//           {investments.length > 0 ? (
//             <ul className="divide-y divide-gray-300">
//               {investments.map((investment, index) => (
//                 <li key={index} className="py-2 flex justify-between items-center">
//                   <span className="text-lg font-medium">{investment.name}</span>
//                   <span className="text-green-500 font-bold">
//                     {currency} {investment.amount.toFixed(2)}
//                   </span>
//                   <span className="text-sm text-gray-500">{investment.status}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">No active investments.</p>
//           )}
//         </div>
//       </section>

//       {/* Live Chart Section */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Live Chart</h2>
//         <div className="bg-gray-100 p-12  rounded-lg shadow-md">
//           <div ref={chartContainer} style={{ height: '500px' }}></div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useRef } from "react";
import { AiOutlineWallet } from "react-icons/ai";

// Dashboard Component
const Dashboard = () => {
  // Example data for Wallet Balance
  const walletBalance = 1200.5; // Dynamic value
  const currency = "USD";

  // Example data for Active Investments
  const investments = [
    { name: "Crypto Fund", amount: 500, status: "Active" },
    { name: "Stock Portfolio", amount: 300, status: "Active" },
  ];

  const chartContainer = useRef();

  // Effect to load TradingView chart script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }
    `;
    
    if (chartContainer.current) {
      chartContainer.current.appendChild(script);
    }

    return () => {
      if (chartContainer.current) {
        chartContainer.current.innerHTML = ''; // Clean up chart on unmount
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      {/* Wallet Balance Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <AiOutlineWallet className="text-gray-600" />
          Wallet Balance
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-lg font-medium">
            Current Balance:{" "}
            <span className="text-green-500 font-bold">
              {currency} {walletBalance.toFixed(2)}
            </span>
          </p>
        </div>
      </section>

      {/* Active Investments Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Active Investments</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {investments.length > 0 ? (
            <ul className="divide-y divide-gray-300">
              {investments.map((investment, index) => (
                <li key={index} className="py-2 flex justify-between items-center">
                  <span className="text-lg font-medium">{investment.name}</span>
                  <span className="text-green-500 font-bold">
                    {currency} {investment.amount.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">{investment.status}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No active investments.</p>
          )}
        </div>
      </section>

      {/* Live Chart Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Live Chart</h2>
        <div className="bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-md">
        <div ref={chartContainer} className="h-64 sm:h-90 md:h-[500px] lg:h-[600px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
