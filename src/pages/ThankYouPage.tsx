import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CustomerData {
  name: string;
  email: string;
  address: string;
}

const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const { customerData } = location.state as { customerData: CustomerData };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-500 mb-4">Thank You for Your Purchase!</h1>
        <p className="text-lg text-gray-600 mb-4">Your order has been successfully completed.</p>

        <div className="border-t border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Order Details</h2>
          <p className="text-gray-700 mt-2"><strong>Name:</strong> {customerData.name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {customerData.email}</p>
          <p className="text-gray-700"><strong>Address:</strong> {customerData.address}</p>
        </div>

        <Link to='/products' className="btn btn-primary mt-4">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
