import React, { JSX } from 'react';
import { Transaction } from '@/types';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TransactionDetail = ({ transaction }: { transaction: Transaction }): JSX.Element => {
  const router = useRouter();

  return (
    <div className='p-5'>
      <button onClick={() => router.back()} className='mb-5'>
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