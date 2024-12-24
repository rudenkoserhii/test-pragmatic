import { Transaction } from '@/types';

export const shuffleArray = (transactions: Transaction[]): Transaction[] => transactions
.map((value) => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)