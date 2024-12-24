import { JSX } from 'react';
import { Transaction } from '@/types';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const TransactionDetail = ({ transaction }: { transaction: Transaction }): JSX.Element => {
  const router = useRouter();
  const { type, amount, name, date, status, bank, card } = transaction || {};
  const year = new Date(date).getFullYear().toString().slice(-2);
  const month = new Date(date).getMonth().toString();
  const day = new Date(date).getDate().toString();
  const time = date?.split(' ')[1]?.split(':')?.slice(0, 2)?.join(':');
const formattedAmount = `${type === 'Payment'
? '+$'
: '$'}${Math.abs(parseFloat(transaction.amount.replace('$', ''))).toFixed(2)}`;

  return (
    <div className='p-5'>
      <button onClick={() => router.back()} className='mb-10'>
        <FontAwesomeIcon icon={faAngleLeft} size='lg' color='#d3d3d3'/>
      </button>
      <h1 className='text-5xl text-center mb-5'>{formattedAmount}</h1>
      <p className='text-sm text-center text-[--text-secondary]'>{name}</p>
      <p className='text-sm text-center text-[--text-secondary] mb-3'>{`${day}/${month}/${year}, ${time}`}</p>
      <div className='bg-white rounded-lg p-4 w-full'>
        <div className="border-b border-gray-300 px-4 pb-1">
          {status && <p className='capitalize font-bold'>Status: {status}</p>}
          <p className='capitalize'>Bank {bank} {card} Card</p>
        </div>
        <div className="flex justify-between items-center px-4 pt-1 font-bold">
          <p className=''>Total:</p>
          <p className=''>{formattedAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;