import React from 'react';
import { useAccount } from '../hooks/useAccount';
import { formatCurrency } from '../services/utils';

const AccountDetails: React.FC = () => {
  const { account, client } = useAccount();

  return (
    <div className='flex flex-col space-y-1'>
      <h1 className='text-lg font-medium text-center'>Dados Bancários</h1>
      <div className='flex flex-row'>
        <h2 className='font-semibold'>Cliente:</h2>
        <h3>{client?.name}</h3>
      </div>
      
      <div className=' flex flex-row '>      
        <div className='flex flex-row w-1/2'>
          <h2 className='font-semibold'>Agência: </h2>
          <h3>{account?.agency}</h3>
        </div>
        <div className='flex flex-row w-1/2'>
          <h2 className='font-semibold'>Conta: </h2>
          <h2>{account?.account}</h2>
        </div>
      </div>
      <h2 className='font-semibold'>Saldo da Conta</h2>
      <h3>{formatCurrency(account?.balance)}</h3>
    </div>
  );
};

export default AccountDetails;
