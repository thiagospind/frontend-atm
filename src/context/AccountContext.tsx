/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { Account, Client, Withdrawal } from './types';

interface AccountContextProps {
  account: Account | undefined;
  withdrawals: Withdrawal[];
  client: Client | undefined;
  fetchAccount: () => void;
  withdrawal: (value: number, bankAccountId: number) => void;
}

export const AccountContext = createContext<AccountContextProps | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const AccountProvider: React.FC<Props> = ({ children }) => {
  const [account, setAccount] = useState<Account | undefined>();
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [client, setClient] = useState<Client | undefined>();

  const fetchAccount = async () => {
    // Fetch account balance and transactions from API
    const response = await api.get('/bankaccount/1');
    console.log(response.data);
    setAccount(response.data);
    setWithdrawals(response.data.withdrawals);
    setClient(response.data.client);
  };

  const withdrawal = async (value: number, bankAccountId: number) => {
    // Withdraw amount from API
    await api.post('/withdrawal', { bankAccountId, value });
    fetchAccount();
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <AccountContext.Provider value={{ client, account, withdrawals, fetchAccount, withdrawal }}>
      {children}
    </AccountContext.Provider>
  );
};
