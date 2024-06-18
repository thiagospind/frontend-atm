import React, { useState } from 'react';
import { useAccount } from '../hooks/useAccount';

const WithdrawalForm: React.FC = () => {
  const { withdrawal, account } = useAccount();
  const [value, setValue] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const bankAccountId = account?.id;
    await withdrawal(value, bankAccountId!);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col text-center'>
        <h1 className='text-lg font-medium'>Efetue o saque</h1>
        <h3>Notas disponíveis: 100, 50, 20, 10</h3>
        <input className='border border-gray-400 rounded-md p-1 w-1/2 mx-auto mt-2 text-center'
          type="number" 
          value={value} 
          onChange={(e) => setValue(Number(e.target.value))} 
        />
        <button 
          className='bg-blue-600 text-white rounded-md shadow-md p-1 w-1/2 mx-auto mt-2' 
          type="submit">Sacar</button>
      </div>
    </form>
  );
};

export default WithdrawalForm;
