import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const PaymentStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get('status');

    if (status === 'success') {
      clearCart();
      toast.success('Payment successful! Thank you for your purchase.');
      setTimeout(() => navigate('/'), 2000);
    } else if (status === 'fail' || status === 'cancel') {
      toast.error('Payment was not successful. Please try again.');
      setTimeout(() => navigate('/checkout'), 2000);
    }
  }, [location, navigate, clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">Processing your payment...</h2>
      </div>
    </div>
  );
};

export default PaymentStatus;