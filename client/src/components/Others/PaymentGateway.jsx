import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const FALLBACK_CURRENCIES = ['btc', 'eth', 'usdt', 'usdc', 'dai', 'bnb', 'matic', 'xrp', 'sol', 'doge'];

export default function PaymentGateway() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [payCurrency, setPayCurrency] = useState(FALLBACK_CURRENCIES[0]);
  const [availableCurrencies, setAvailableCurrencies] = useState(FALLBACK_CURRENCIES);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [minAmount, setMinAmount] = useState(null);
  const [estimatedAmount, setEstimatedAmount] = useState(null);
  const [apiWarning, setApiWarning] = useState('');

  // Fetch available currencies
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/currencies`, {
          timeout: 5000
        });
        
        if (response.data?.currencies?.length > 0) {
          setAvailableCurrencies(response.data.currencies);
          setPayCurrency(response.data.currencies[0]);
          if (response.data.warning) {
            setApiWarning(response.data.warning);
          }
        } else {
          throw new Error('No currencies received');
        }
      } catch (error) {
        console.error('Currency fetch error:', error);
        setApiWarning('Using default currencies - API unavailable');
        setAvailableCurrencies(FALLBACK_CURRENCIES);
        setPayCurrency(FALLBACK_CURRENCIES[0]);
      }
    };
    fetchCurrencies();
  }, []);

  // Get minimum amount
  useEffect(() => {
    if (payCurrency) {
      const fetchMinAmount = async () => {
        try {
          const response = await axios.get(
            `${API_BASE_URL}/api/estimate?amount=1¤cy_from=${currency}¤cy_to=${payCurrency}`,
            { timeout: 5000 }
          );
          setMinAmount(response.data.min_amount);
        } catch (error) {
          console.error('Min amount error:', error);
          setMinAmount(null);
        }
      };
      fetchMinAmount();
    }
  }, [payCurrency, currency]);

  // Estimate amount
  useEffect(() => {
    if (amount && payCurrency) {
      const estimateAmount = async () => {
        try {
          const response = await axios.get(
            `${API_BASE_URL}/api/estimate?amount=${amount}¤cy_from=${currency}¤cy_to=${payCurrency}`,
            { timeout: 5000 }
          );
          setEstimatedAmount(response.data.estimated_amount);
        } catch (error) {
          console.error('Estimation error:', error);
          setEstimatedAmount(null);
        }
      };
      estimateAmount();
    } else {
      setEstimatedAmount(null);
    }
  }, [amount, currency, payCurrency]);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!amount || !payCurrency) return;

    setIsLoading(true);
    setPaymentStatus('Processing payment...');

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/create-payment`,
        { 
          amount, 
          currency, 
          pay_currency: payCurrency 
        },
        { timeout: 10000 }
      );

      setPaymentUrl(response.data.payment_url);
      setPaymentStatus('Payment created! Redirecting...');
      window.location.href = response.data.payment_url;
    } catch (error) {
      console.error('Payment error:', error);
      let errorMessage = 'Payment failed';
      
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      }
      
      if (error.response?.data?.minAmount) {
        errorMessage += ` (Min: ${error.response.data.minAmount} ${error.response.data.pay_currency.toUpperCase()})`;
      } else if (error.response?.data?.details) {
        errorMessage += `: ${error.response.data.details}`;
      }
      
      setPaymentStatus(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Crypto Payment</h2>
      
      {apiWarning && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded text-sm">
          {apiWarning}
        </div>
      )}
      
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Amount ({currency.toUpperCase()})</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
            placeholder="10.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pay with</label>
          <select
            value={payCurrency}
            onChange={(e) => setPayCurrency(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            {availableCurrencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          {minAmount && (
            <div>Minimum: {minAmount} {payCurrency.toUpperCase()}</div>
          )}
          {estimatedAmount && (
            <div>You'll pay: ~{estimatedAmount} {payCurrency.toUpperCase()}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || !amount || !payCurrency}
          className={`w-full py-2 px-4 rounded-md text-white ${
            isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>

      {paymentStatus && (
        <div className={`mt-4 p-3 rounded ${
          paymentStatus.includes('failed') || paymentStatus.includes('Failed') || paymentStatus.includes('Error')
            ? 'bg-red-100 text-red-700' 
            : 'bg-green-100 text-green-700'
        }`}>
          {paymentStatus}
        </div>
      )}

      {paymentUrl && (
        <div className="mt-4 text-center">
          <a 
            href={paymentUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Click here if not redirected
          </a>
        </div>
      )}
    </div>
  );
}