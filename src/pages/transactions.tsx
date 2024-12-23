// src/pages/transactions.tsx

import React, { useState, useEffect } from 'react';
import CardBalanceBlock from '@/components/CardBalanceBlock';
import PaymentDueBlock from '../components/PaymentDueBlock';
import DailyPointsBlock from '../components/DailyPointsBlock';
import LatestTransactionsBlock from '../components/LatestTransactionsBlock';
import { Transaction } from '../types/transaction.type.ts';
import mockData from '../../public/data/mock.json';
import { calculatePoints } from '../utils/calculatePoints';
// import formatDate from '../utils/formatDate';
import { shuffleArray } from '@/helpers';
import { Due } from '@/types';

const DEFAULT_LIMIT = 1500;
const DEFAULT_BALANCE = 0;

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cardBalance, setCardBalance] = useState({ limit: DEFAULT_LIMIT, balance: DEFAULT_BALANCE });
  const [dailyPoints, setDailyPoints] = useState<number>(0);
  const [paymentDue, setPaymentDue] = useState<Due>({ amount: 0, month: 0 });

  useEffect(() => {
    // Load mock data
    const { transactions, cardBalance, dailyPoints, paymentDue } = mockData;

    // Set transactions
    setTransactions(shuffleArray(transactions).slice(0, 10)); // Show only the latest 10 transactions

    // Set card balance
    setCardBalance({
      limit: cardBalance.limit,
      balance: cardBalance.balance,
    });

    // Set daily points (assuming the mockData includes today's points)
    setDailyPoints(dailyPoints);

    setPaymentDue(paymentDue);
  }, []);

  return (
    <>
      <div className='grid grid-cols-2 gap-4 m-4'>
        <div>
          <CardBalanceBlock
            limit={cardBalance.limit}
            balance={cardBalance.balance}
          />
          <DailyPointsBlock points={dailyPoints} />
        </div>
        <PaymentDueBlock paymentDue={paymentDue} />
      </div>
      <LatestTransactionsBlock transactions={transactions} /></>
  );
};

export default Transactions;