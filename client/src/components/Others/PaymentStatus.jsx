import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function PaymentStatus() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Checking payment status...');
  const [paymentData, setPaymentData] = useState(null);
  const paymentId = searchParams.get('payment_id');

  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (!paymentId) {
        setStatus('No payment ID found');
        return;
      }

      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/payment-status/${paymentId}`
        );
        
        setPaymentData(response.data);
        setStatus(`Payment status: ${response.data.payment_status}`);
      } catch (error) {
        console.error('Status check error:', error);
        setStatus('Error checking payment status');
      }
    };

    checkPaymentStatus();
  }, [paymentId]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Payment Status</h2>
      <div className="p-4 bg-blue-100 rounded-md text-blue-800 mb-4">
        {status}
      </div>
      
      {paymentData && (
        <div className="space-y-2">
          <p><strong>Amount:</strong> {paymentData.price_amount} {paymentData.price_currency}</p>
          <p><strong>Pay Amount:</strong> {paymentData.pay_amount} {paymentData.pay_currency}</p>
          <p><strong>Payment ID:</strong> {paymentId}</p>
        </div>
      )}
    </div>
  );
}