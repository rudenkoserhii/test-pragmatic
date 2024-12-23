// src/components/LatestTransactionsBlock.tsx

import React from 'react';
import { Transaction } from '../types/transaction.type.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { getIcon } from '@/helpers/getIcon';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface LatestTransactionsProps {
  transactions: Transaction[];
}

const LatestTransactionsBlock: React.FC<LatestTransactionsProps> = ({ transactions }) => {


  return (
    <div className=' m-4'>
      <h2 className='text-2xl font-bold mb-2'>Latest Transactions</h2>
      <div className='bg-white rounded-lg p-4 w-full'>
        {transactions.map((transaction, index) => (
          <Link key={index} href={`/transaction/${transaction.id}`} passHref className='w-full grid grid-cols-3 py-1' style={{ gridTemplateColumns: '40px auto 20px' }}>
            <div className="w-[40px] h-[40px] rounded-md bg-gray-800 flex items-center justify-center mr-2 flex-col" style={{ alignSelf: 'center' }}>
              <FontAwesomeIcon icon={getIcon(transaction.icon)} color="white" />
            </div>
            <div className="border-b border-gray-300 flex-col px-4 pb-1">
              <div className="flex justify-between">
                <h3 className='font-bold'>{transaction.type}</h3>
                <p className='ml-2'>{transaction.type === 'Payment' ? '+' : '-'}${Math.abs(parseFloat(transaction.amount.replace('$', ''))).toFixed(2)}</p>
              </div>
              <div className="flex justify-between w-full">
                <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 'Calc(100vw - 200px)', overflow: 'hidden' }}>{`${transaction.pending ? 'Pending - ' : ''}${transaction.name} - ${transaction.description}`}</p>
                <p>{transaction?.tax ? `${transaction.tax}%` : ''}</p>
              </div>
                <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 'Calc(100vw - 200px)', overflow: 'hidden' }}>{transaction.authorizedUser ? `${transaction.authorizedUser} - ` : ''}{transaction.date}</p>
            </div>
            <div className="flex justify-start ml-2 flex-col">
              <FontAwesomeIcon icon={faAngleRight} size='lg' color='#d3d3d3' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestTransactionsBlock;