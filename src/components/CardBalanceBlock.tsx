import { CardBalance } from '@/types';
import React from 'react';

const CardBalanceBlock: React.FC<CardBalance> = ({ limit, balance }) => {
  return (
    <div className='bg-white rounded-lg p-4 mb-4 w-full h-1/2'>
      <h3 >Card Balance</h3>
      <div>
        <p className='text-3xl font-bold'>${balance.toFixed(2)}</p>
        <p className='text-[--text-secondary]'>${(limit - balance).toFixed(2)} Available</p>
      </div>
    </div>
  );
};

export default CardBalanceBlock;