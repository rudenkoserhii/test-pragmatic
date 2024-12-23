// src/pages/transaction/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import { Transaction } from '../../types/transaction.type.ts';
import mockData from '../../../public/data/mock.json';

const TransactionDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the transaction by id from the mock data
  const transaction = mockData.transactions.find((t: Transaction) => t.id === id);

  // If no transaction is found, display an error message
  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Transaction Details</h1>
      <div>
        <p><strong>Type:</strong> {transaction.type}</p>
        <p><strong>Amount:</strong> {transaction.amount}</p>
        <p><strong>Name:</strong> {transaction.name}</p>
        <p><strong>Description:</strong> {transaction.pending ? 'Pending - ' + transaction.description : transaction.description}</p>
        <p><strong>Date:</strong> {transaction.date}</p>
        {transaction.authorizedUser && <p><strong>Authorized User:</strong> {transaction.authorizedUser}</p>}
      </div>
      <button onClick={() => router.back()}>Back to Transactions</button>
    </div>
  );
};

export default TransactionDetail;