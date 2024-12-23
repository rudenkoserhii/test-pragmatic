// src/types/transaction.ts

export interface Transaction {
    id: string; // Assuming each transaction has a unique identifier
    type: string;
    amount: string; // You might want to use number if you're dealing with numeric values directly
    tax?: number;
    name: string;
    description: string;
    date: string; // This could be formatted as needed, e.g., 'YYYY-MM-DD' or 'Day of week' for recent transactions
    pending: boolean;
    authorizedUser?: string; // Optional since not all transactions might have an authorized user
    icon: string; // Assuming this is a string identifier for the icon
  }