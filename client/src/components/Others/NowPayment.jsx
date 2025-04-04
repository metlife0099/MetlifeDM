import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NowPayment = () => {
  const [amount, setAmount] = useState(10);
  const [currency, setCurrency] = useState("USD");
  const [payCurrency, setPayCurrency] = useState("BTC");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price_amount: Number(amount), // Convert amount to number
          price_currency: currency,
          pay_currency: payCurrency,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.invoice_url) {
        window.location.href = data.invoice_url; // Redirect to NowPayments
      } else {
        toast.error(data.message || "Payment failed.");
      }
    } catch (error) {
      toast.error("Network error. Check your server.");
      console.error("Payment error:", error);
    }
    setLoading(false);
  };
  

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg !p-6 !mt-10">
      <h2 className="text-2xl font-bold text-center !mb-4">Crypto Payment</h2>
      <label className="block !mb-2">Amount (in {currency}):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full !p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <label className="block mt-4">Select Payment Currency:</label>
      <select
        value={payCurrency}
        onChange={(e) => setPayCurrency(e.target.value)}
        className="w-full !p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="ETH">Ethereum (ETH)</option>
        <option value="USDT">Tether (USDT)</option>
      </select>

      <button
        onClick={handlePayment}
        className="w-full !mt-6 !p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default NowPayment;
