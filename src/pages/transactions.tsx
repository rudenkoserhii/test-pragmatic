import React, { useState, useEffect, JSX } from 'react';
import CardBalanceBlock from '@/components/CardBalanceBlock';
import PaymentDueBlock from '@/components/PaymentDueBlock';
import DailyPointsBlock from '@/components/DailyPointsBlock';
import LatestTransactionsBlock from '@/components/LatestTransactionsBlock';
import { CardBalance, Transaction } from '@/types';
import mockData from '../../public/data/mock.json';
import { calculatePoints } from '@/utils';
import { shuffleArray } from '@/helpers';
import { Due } from '@/types';

const DEFAULT_LIMIT = 1500;
const DEFAULT_BALANCE = 0;
const DEFAULT_VALUE_NUMBER = 0;
const FIRST_ELEMENT = 0;
const LIMIT = 10;

const Transactions = (): JSX.Element => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cardBalance, setCardBalance] = useState<CardBalance>({ limit: DEFAULT_LIMIT, balance: DEFAULT_BALANCE });
  const [dailyPoints, setDailyPoints] = useState<number>(DEFAULT_VALUE_NUMBER);
  const [paymentDue, setPaymentDue] = useState<Due>({ amount: DEFAULT_VALUE_NUMBER, month: DEFAULT_VALUE_NUMBER });

  useEffect(() => {
    const { transactions, cardBalance, paymentDue } = mockData;

    setTransactions(shuffleArray(transactions).slice(FIRST_ELEMENT, LIMIT));

    setCardBalance({
      limit: cardBalance.limit,
      balance: cardBalance.balance,
    });

    setDailyPoints(calculatePoints());

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