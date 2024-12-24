import { JSX } from 'react';
import { Transaction } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { getIcon } from '@/helpers';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@/utils';
import { API_ROUTES } from '@/enums';

const LatestTransactionsBlock = ({ transactions }: { transactions: Transaction[]}): JSX.Element => (
    <div className=' m-4'>
      <h2 className='text-2xl font-bold mb-2'>Latest Transactions</h2>
      <div className='bg-white rounded-lg p-4 w-full'>
        {transactions
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((transaction, index) => (
            <Link
              key={index}
              href={`${API_ROUTES.TRANSACTION}/${transaction.id}`}
              passHref
              className='w-full grid grid-cols-3 py-1 grid grid-cols-[40px_auto_20px]'
            >
              <div className="w-[40px] h-[40px] rounded-md bg-gray-800 flex items-center justify-center mr-2 flex-col self-center">
                <FontAwesomeIcon icon={getIcon(transaction.icon)} color="white" />
              </div>
              <div className="border-b border-gray-300 flex-col px-4 pb-1">
                <div className="flex justify-between items-center">
                  <h3 className='font-bold'>{transaction.type}</h3>
                  <p className='ml-2'>
                    {
                      transaction.type === 'Payment'
                        ? '+'
                        : ''}${Math.abs(parseFloat(transaction.amount.replace('$', ''))).toFixed(2)
                    }
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className={`truncate ${transaction?.tax
                      ? 'max-w-[calc(100vw-200px)]'
                      : 'max-w-[calc(100vw-180px)]'
                    }`}
                  >{`${transaction.pending ? 'Pending - ' : ''}${transaction.name} - ${transaction.description}`}</p>
                  <p className='bg-[--background] text--gray-300 px-1 text-xs h-fit rounded'>{transaction?.tax ? `${transaction.tax}%` : ''}</p>
                </div>
                <p className="truncate max-w-[calc(100vw-200px)]">{
                  transaction.authorizedUser
                    ? `${transaction.authorizedUser} - `
                    : ''}{formatDate(transaction.date)
                  }</p>
              </div>
              <div className="flex justify-start ml-2 flex-col">
                <FontAwesomeIcon icon={faAngleRight} size='lg' color='#d3d3d3' />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );

export default LatestTransactionsBlock;