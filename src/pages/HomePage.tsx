import React from 'react';
import AccountDetails from '../components/AccountDetails';
import TransactionHistory from '../components/TransactionHistory';
import WithdrawalPage from './WithdrawalPage';



const HomePage: React.FC = () => {  
  
  return (
    <div className='flex items-center justify-center h-screen bg-blue-300 '>
      <div className='flex-col bg-white px-6 py-6 rounded-lg w-full max-w-[500px] mx-auto'>
        <div className='flex-col bg-gray-300 mb-4 rounded-lg px-4 py-4'>
          <AccountDetails />
        </div>          
        <div className='flex-col bg-amber-200 mb-4 rounded-lg px-4 py-4'>
          <WithdrawalPage />
        </div>
        <TransactionHistory />
      </div>
    </div>
  );
};

export default HomePage;
