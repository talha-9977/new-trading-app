
// import React, { useState } from "react";

// const Invest = () => {
//   const investmentPlans = [
//     { days: 10, returnRate: 0.15 },
//     { days: 30, returnRate: 0.50 },
//     { days: 90, returnRate: 1.80 },
//     { days: 180, returnRate: 4.00 },
//   ];

//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [investmentAmount, setInvestmentAmount] = useState("");
//   const [investments, setInvestments] = useState([]);

//   const calculateReturns = (amount, plan) => {
//     if (!amount || !plan) return 0;
//     return amount * (1 + plan.returnRate);
//   };

//   const handlePlanSelect = (plan) => {
//     setSelectedPlan(plan);
//   };

//   const handleAmountChange = (e) => {
//     const value = e.target.value;
//     setInvestmentAmount(value ? parseFloat(value) : "");
//   };

//   const handleInvest = () => {
//     if (!investmentAmount || !selectedPlan) {
//       alert("Please select an investment plan and enter an amount.");
//       return;
//     }
//     const totalReturns = calculateReturns(investmentAmount, selectedPlan);
//     const newInvestment = {
//       id: Date.now(), // Unique ID for the investment
//       amount: investmentAmount,
//       plan: selectedPlan.days,
//       expectedReturn: totalReturns.toFixed(2),
//       endDate: new Date(new Date().setDate(new Date().getDate() + selectedPlan.days)),
//     };

//     setInvestments([...investments, newInvestment]);
//     alert(`Investment successful! You will receive ${totalReturns.toFixed(2)} after ${selectedPlan.days} days.`);
//     setInvestmentAmount(""); // Reset investment amount after successful investment
//     setSelectedPlan(null); // Reset selected plan
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-4">
//       {/* AI Sport Trade Investment Title */}
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">AI Sport Trade Investment</h2>
      
//       {/* Investment Plan Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Select Investment Plan</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {investmentPlans.map((plan) => (
//             <button
//               key={plan.days}
//               onClick={() => handlePlanSelect(plan)}
//               className={`p-4 rounded-lg transition-colors ${
//                 selectedPlan?.days === plan.days
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//               }`}
//             >
//               {plan.days} Days
//               <br />
//               {plan.returnRate * 100}% Return
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Investment Amount Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-6">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Investment Amount</h3>
//         <input
//           type="number"
//           placeholder="Investment Amount (USD)"
//           value={investmentAmount}
//           onChange={handleAmountChange}
//           className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
//         />
//         {selectedPlan && investmentAmount && (
//           <p className="text-sm text-gray-600 mt-2">
//             Expected Return: ${calculateReturns(parseFloat(investmentAmount), selectedPlan).toFixed(2)}
//           </p>
//         )}
//         <button
//           onClick={handleInvest}
//           disabled={!selectedPlan || !investmentAmount}
//           className="w-full py-2 px-4 mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//         >
//           Invest Now
//         </button>
//       </div>

//       {/* Active Investments Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-6">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Active Investments</h3>
//         {investments.length > 0 ? (
//           <div className="space-y-4">
//             {investments.map((investment) => (
//               <div key={investment.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                 <p>Amount: ${investment.amount}</p>
//                 <p>Duration: {investment.plan} days</p>
//                 <p>Expected Return: ${investment.expectedReturn}</p>
//                 <p>End Date: {investment.endDate.toLocaleDateString()}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No active investments.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Invest;
import React, { useState } from "react";

const Invest = () => {
  const investmentPlans = [
    { days: 10, returnRate: 0.15 },
    { days: 30, returnRate: 0.50 },
    { days: 90, returnRate: 1.80 },
    { days: 180, returnRate: 4.00 },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investments, setInvestments] = useState([]);

  const calculateReturns = (amount, plan) => {
    if (!amount || !plan) return 0;
    return amount * (1 + plan.returnRate);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setInvestmentAmount(value ? parseFloat(value) : "");
  };

  const handleInvest = () => {
    if (!investmentAmount || !selectedPlan) {
      alert("Please select an investment plan and enter an amount.");
      return;
    }
    const totalReturns = calculateReturns(investmentAmount, selectedPlan);
    const newInvestment = {
      id: Date.now(), // Unique ID for the investment
      amount: investmentAmount,
      plan: selectedPlan.days,
      expectedReturn: totalReturns.toFixed(2),
      endDate: new Date(new Date().setDate(new Date().getDate() + selectedPlan.days)),
    };

    setInvestments([...investments, newInvestment]);
    alert(`Investment successful! You will receive ${totalReturns.toFixed(2)} after ${selectedPlan.days} days.`);
    setInvestmentAmount(""); // Reset investment amount after successful investment
    setSelectedPlan(null); // Reset selected plan
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 sm:p-6 md:p-8 mb-12">
      {/* AI Sport Trade Investment Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">AI Sport Trade Investment</h2>
      
      {/* Investment Plan Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Select Investment Plan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentPlans.map((plan) => (
            <button
              key={plan.days}
              onClick={() => handlePlanSelect(plan)}
              className={`p-4 rounded-lg transition-colors ${
                selectedPlan?.days === plan.days
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {plan.days} Days
              <br />
              {plan.returnRate * 100}% Return
            </button>
          ))}
        </div>
      </div>

      {/* Investment Amount Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Investment Amount</h3>
        <input
          type="number"
          placeholder="Investment Amount (USD)"
          value={investmentAmount}
          onChange={handleAmountChange}
          className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {selectedPlan && investmentAmount && (
          <p className="text-sm text-gray-600 mt-2">
            Expected Return: ${calculateReturns(parseFloat(investmentAmount), selectedPlan).toFixed(2)}
          </p>
        )}
        <button
          onClick={handleInvest}
          disabled={!selectedPlan || !investmentAmount}
          className="w-full py-2 px-4 mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Invest Now
        </button>
      </div>

      {/* Active Investments Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Active Investments</h3>
        {investments.length > 0 ? (
          <div className="space-y-4">
            {investments.map((investment) => (
              <div key={investment.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p>Amount: ${investment.amount}</p>
                <p>Duration: {investment.plan} days</p>
                <p>Expected Return: ${investment.expectedReturn}</p>
                <p>End Date: {investment.endDate.toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
<p className="text-gray-500 p-6 sm:p-8 md:p-8 m-4 sm:m-3 md:m-8">No active investments.</p>
        )}
      </div>
    </div>
  );
};

export default Invest;
