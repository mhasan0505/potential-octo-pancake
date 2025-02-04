import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Success = () => {
  const [validationStatus, setValidationStatus] = useState('validating');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const validatePayment = async () => {
      const params = new URLSearchParams(location.search);
      const val_id = params.get('val_id');
      const tran_id = params.get('tran_id');
      
      // Get stored transaction ID
      const storedTranId = localStorage.getItem('current_transaction');

      if (!val_id && !tran_id) {
        setError('No transaction ID found');
        setValidationStatus('error');
        return;
      }

      try {
        // First try with val_id if available
        if (val_id) {
          const validationData = {
            val_id,
            store_id: 'aquas67055c5b8e252',
            store_passwd: 'aquas67055c5b8e252@ssl',
            format: 'json',
          };

          console.log('Validating with val_id:', validationData);

          const response = await axios.post(
            'https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php',
            validationData,
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            }
          );

          console.log('Validation Response:', response.data);

          if (response.data?.status === 'VALID' || response.data?.status === 'VALIDATED') {
            handleSuccess(response.data);
            return;
          }
        }

        // If val_id validation fails or not available, try with tran_id
        if (tran_id) {
          const statusData = {
            tran_id,
            store_id: 'aquas67055c5b8e252',
            store_passwd: 'aquas67055c5b8e252@ssl',
          };

          console.log('Checking status with tran_id:', statusData);

          const statusResponse = await axios.post(
            'https://sandbox.sslcommerz.com/validator/api/merchantTransIDvalidationAPI.php',
            statusData,
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            }
          );

          console.log('Status Response:', statusResponse.data);

          if (statusResponse.data?.status === 'VALID' || statusResponse.data?.status === 'VALIDATED') {
            handleSuccess(statusResponse.data);
            return;
          }
        }

        // If both validations fail
        setValidationStatus('invalid');
        setError('Payment validation failed');
      } catch (error) {
        console.error('Validation error:', error);
        setValidationStatus('error');
        setError(error.message || 'Error validating payment');
      }
    };

    validatePayment();
  }, [location.search]);

  const handleSuccess = (data) => {
    setValidationStatus('success');
    // Store transaction details
    localStorage.setItem('lastTransaction', JSON.stringify({
      ...data,
      time: new Date().toISOString()
    }));
    // Clear current transaction
    localStorage.removeItem('current_transaction');
  };

  const renderContent = () => {
    switch (validationStatus) {
      case 'validating':
        return (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4">Validating your payment...</p>
          </div>
        );
      
      case 'success':
        return (
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
            <p className="mb-6">Thank you for your purchase.</p>
            <button
              onClick={() => navigate('/shop')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </div>
        );
      
      case 'invalid':
        return (
          <div className="text-center">
            <div className="text-red-500 text-5xl mb-4">⚠</div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Validation Failed</h2>
            <p className="mb-2">{error || 'Your payment could not be validated.'}</p>
            <p className="mb-6">Please contact support if you believe this is an error.</p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Contact Support
            </button>
          </div>
        );
      
      case 'error':
        return (
          <div className="text-center">
            <div className="text-red-500 text-5xl mb-4">✕</div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something Went Wrong</h2>
            <p className="mb-2">{error || 'We encountered an error while processing your payment.'}</p>
            <p className="mb-6">Please try again or contact support.</p>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/checkout')}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
              >
                Contact Support
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
      {renderContent()}
    </div>
  );
};

export default Success;