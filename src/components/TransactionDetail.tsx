// src/components/TransactionDetail.tsx

import React from 'react';
import { Transaction } from '../types/transaction.type.ts';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface TransactionDetailProps {
  transaction: Transaction;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction }) => {
  const router = useRouter();

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => router.back()} style={{ marginBottom: '20px' }}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <h1>Transaction Details</h1>
      <div>
        <p><strong>Type:</strong> {transaction.type}</p>
        <p><strong>Amount:</strong> {transaction.amount}</p>
        <p><strong>Name:</strong> {transaction.name}</p>
        <p><strong>Description:</strong> {transaction.pending ? 'Pending - ' + transaction.description : transaction.description}</p>
        <p><strong>Date:</strong> {transaction.date}</p>
        {transaction.authorizedUser && <p><strong>Authorized User:</strong> {transaction.authorizedUser}</p>}
      </div>
    </div>
  );
};

export default TransactionDetail;