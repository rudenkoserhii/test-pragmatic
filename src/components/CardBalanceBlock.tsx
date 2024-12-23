import React from 'react';

interface CardBalanceProps {
  limit: number;
  balance: number;
}

const CardBalanceBlock: React.FC<CardBalanceProps> = ({ limit, balance }) => {
  return (
    <div className='bg-white rounded-lg p-4 mb-4 w-full h-1/2'>
      <h3 >Card Balance</h3>
      <div>
        <p className='text-3xl font-bold'>${balance.toFixed(2)}</p>
        <p className='text-[--background]'>${(limit - balance).toFixed(2)} Available</p>
      </div>
    </div>
  );
};

export default CardBalanceBlock;