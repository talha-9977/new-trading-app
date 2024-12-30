// import React, { useState } from "react";

// const Wallet = () => {
//   const [balance, setBalance] = useState(1000); // Example initial balance
//   const [amount, setAmount] = useState("");
//   const [error, setError] = useState("");
//   const [transactions, setTransactions] = useState([]);

//   const handleDeposit = () => {
//     const value = parseFloat(amount);
//     if (value > 0) {
//       setBalance((prev) => prev + value);
//       setTransactions((prev) => [
//         ...prev,
//         { id: prev.length + 1, type: "Deposit", amount: value },
//       ]);
//       setAmount("");
//       setError("");
//     } else {
//       setError("Please enter a valid deposit amount.");
//     }
//   };

//   const handleWithdraw = () => {
//     const value = parseFloat(amount);
//     if (value > 0 && value <= balance) {
//       setBalance((prev) => prev - value);
//       setTransactions((prev) => [
//         ...prev,
//         { id: prev.length + 1, type: "Withdrawal", amount: value },
//       ]);
//       setAmount("");
//       setError("");
//     } else if (value > balance) {
//       setError("Insufficient balance for this withdrawal.");
//     } else {
//       setError("Please enter a valid withdrawal amount.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-4">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Wallet Management</h2>

//       {/* Current Balance */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-700">
//           Current Balance: <span className="text-green-600">${balance.toFixed(2)}</span>
//         </h3>
//       </div>

//       {/* Deposit/Withdraw Form */}
//       <div className="mb-6">
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Enter amount"
//           className="w-full p-2 mb-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
//         />
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//         <div className="flex space-x-4">
//           <button
//             onClick={handleDeposit}
//             className="w-full py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
//           >
//             Deposit
//           </button>
//           <button
//             onClick={handleWithdraw}
//             className="w-full py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
//           >
//             Withdraw
//           </button>
//         </div>
//       </div>

//       {/* Recent Transactions */}
//       <div>
//         <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Transactions</h3>
//         {transactions.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-300 text-left">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border border-gray-300 px-4 py-2 text-gray-700">Type</th>
//                   <th className="border border-gray-300 px-4 py-2 text-gray-700">Amount (USD)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((transaction) => (
//                   <tr key={transaction.id} className="hover:bg-gray-50">
//                     <td className="border border-gray-300 px-4 py-2 text-gray-800">
//                       {transaction.type}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-gray-800">
//                       ${transaction.amount.toFixed(2)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-gray-500">No recent transactions.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wallet;
import React, { useState } from "react";

const Wallet = () => {
  const [balance, setBalance] = useState(1000); // Example initial balance
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (value > 0) {
      setBalance((prev) => prev + value);
      setTransactions((prev) => [
        ...prev,
        { id: prev.length + 1, type: "Deposit", amount: value },
      ]);
      setAmount("");
      setError("");
    } else {
      setError("Please enter a valid deposit amount.");
    }
  };

  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (value > 0 && value <= balance) {
      setBalance((prev) => prev - value);
      setTransactions((prev) => [
        ...prev,
        { id: prev.length + 1, type: "Withdrawal", amount: value },
      ]);
      setAmount("");
      setError("");
    } else if (value > balance) {
      setError("Insufficient balance for this withdrawal.");
    } else {
      setError("Please enter a valid withdrawal amount.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Wallet Management</h2>

      {/* Current Balance */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">
          Current Balance: <span className="text-green-600">${balance.toFixed(2)}</span>
        </h3>
      </div>

      {/* Deposit/Withdraw Form */}
      <div className="mb-6">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 p-2 mb-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 sm:space-y-0 space-y-4">
          <button
            onClick={handleDeposit}
            className="w-full sm:w-1/2 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          >
            Deposit
          </button>
          <button
            onClick={handleWithdraw}
            className="w-full sm:w-1/2 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Transactions</h3>
        {transactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">
                      {transaction.type}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800">
                      ${transaction.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No recent transactions.</p>
        )}
      </div>
    </div>
  );
};

export default Wallet;
