import React from 'react';
import { useAccount } from '../hooks/useAccount';
import { convertUnixTimestampToDate, formatCurrency } from '../services/utils';

const TransactionHistory: React.FC = () => {
  const { withdrawals } = useAccount();
  

  return (
    <div>      
      <h2 className='font-semibold'>Histórico de Saques</h2>
      <ul>
        {withdrawals.map((withdrawal, index) => (
          <li key={index}>
            {`${convertUnixTimestampToDate(withdrawal.date)} => ${formatCurrency(withdrawal.value)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
