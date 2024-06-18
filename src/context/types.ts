export interface Withdrawal {
  id: number;
  value: number;
  date: number;
  notes: string;
  bankAccountId: number;
}

export interface Client {
  id: number;
  name: string;
  cpf: string;
}

export interface Account {
  id: number;
  account: string;
  agency: string;
  balance: number;
  client: Client;
  withdrawals: Withdrawal[];
  clientId: number;
}