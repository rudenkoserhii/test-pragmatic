import { JSX } from 'react';
import { useRouter } from 'next/router';
import { Transaction } from '@/types';
import mockData from '../../../public/data/mock.json';
import TransactionDetail from '@/components/TransactionDetail';

const TransactionById = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  const transaction = mockData.transactions.find((t: Transaction) => t.id === id);

  return !transaction ? <div>Transaction not found</div> : 
    <TransactionDetail transaction={transaction}/>
  ;
};

export default TransactionById;