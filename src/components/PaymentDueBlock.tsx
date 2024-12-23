
// src/components/NoPaymentDueBlock.tsx

import { MONTH_NAMES } from '@/constants';
import { Due } from '@/types';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';

const PaymentDueBlock = ({ paymentDue }: { paymentDue: Due }): JSX.Element => {
  const { amount, month } = paymentDue;
  
  return (
    <div className='bg-white rounded-lg p-4 row-span-2 h-full flex flex-col justify-between'>
      <div className='flex flex-col'>

        <h3>{`${amount ? '' : 'No '}Payment Due`}</h3>
        <p className='text-[--background]'>{amount
          ? `Your ${MONTH_NAMES[month - 1]} Payment due balance is ${amount}`
          : `You\'ve paid your ${MONTH_NAMES[month - 1]} balance`}</p>
      </div>
      <FontAwesomeIcon icon={amount
        ? faCircleExclamation
        : faCircleCheck} size='5x' color='#d3d3d3' className='bg-black rounded-full ml-auto' />
    </div>
  );
};

export default PaymentDueBlock;