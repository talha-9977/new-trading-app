
// import React, { useState } from "react";

// const Transactions = () => {
//   // Sample transaction data
//   const [transactions, setTransactions] = useState([
//     { id: 1, date: "2024-12-01", type: "Deposit", amount: 500 },
//     { id: 2, date: "2024-12-05", type: "Withdrawal", amount: 200 },
//     { id: 3, date: "2024-12-10", type: "Investment", amount: 300 },
//     { id: 4, date: "2024-12-15", type: "Profit", amount: 100 },
//   ]);

//   const [filter, setFilter] = useState("All");
//   const [sort, setSort] = useState("Date");

//   const filteredTransactions =
//     filter === "All"
//       ? transactions
//       : transactions.filter((transaction) => transaction.type === filter);

//   const sortedTransactions = [...filteredTransactions].sort((a, b) => {
//     if (sort === "Date") {
//       return new Date(b.date) - new Date(a.date);
//     } else if (sort === "Amount") {
//       return b.amount - a.amount;
//     }
//     return 0;
//   });

//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-4">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Transaction History</h2>

//       {/* Filters */}
//       <div className="flex items-center justify-between mb-4">
//         <div>
//           <label htmlFor="filter" className="mr-2 font-semibold text-gray-700">
//             Filter by:
//           </label>
//           <select
//             id="filter"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
//           >
//             <option value="All">All</option>
//             <option value="Deposit">Deposit</option>
//             <option value="Withdrawal">Withdrawal</option>
//             <option value="Investment">Investment</option>
//             <option value="Profit">Profit</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="sort" className="mr-2 font-semibold text-gray-700">
//             Sort by:
//           </label>
//           <select
//             id="sort"
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
//           >
//             <option value="Date">Date</option>
//             <option value="Amount">Amount</option>
//           </select>
//         </div>
//       </div>

//       {/* Transactions Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300 text-left">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2 text-gray-700">Date</th>
//               <th className="border border-gray-300 px-4 py-2 text-gray-700">Type</th>
//               <th className="border border-gray-300 px-4 py-2 text-gray-700">Amount (USD)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedTransactions.length > 0 ? (
//               sortedTransactions.map((transaction) => (
//                 <tr key={transaction.id} className="hover:bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-2 text-gray-800">
//                     {transaction.date}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2 text-gray-800">
//                     {transaction.type}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2 text-gray-800">
//                     ${transaction.amount.toFixed(2)}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="3"
//                   className="border border-gray-300 px-4 py-2 text-center text-gray-500"
//                 >
//                   No transactions found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Transactions;
import React, { useState } from "react";

const Transactions = () => {
  // Sample transaction data
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2024-12-01", type: "Deposit", amount: 500 },
    { id: 2, date: "2024-12-05", type: "Withdrawal", amount: 200 },
    { id: 3, date: "2024-12-10", type: "Investment", amount: 300 },
    { id: 4, date: "2024-12-15", type: "Profit", amount: 100 },
  ]);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Date");

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((transaction) => transaction.type === filter);

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sort === "Date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sort === "Amount") {
      return b.amount - a.amount;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Transaction History</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="filter" className="mr-2 font-semibold text-gray-700">
            Filter by:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none w-full"
          >
            <option value="All">All</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Investment">Investment</option>
            <option value="Profit">Profit</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="mr-2 font-semibold text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none w-full"
          >
            <option value="Date">Date</option>
            <option value="Amount">Amount</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-gray-700">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-gray-700">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-gray-700">Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.length > 0 ? (
              sortedTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {transaction.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {transaction.type}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    ${transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
