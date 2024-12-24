export interface Transaction {
    id: string;
    type: string;
    amount: string;
    tax?: number;
    name: string;
    description: string;
    date: string;
    pending: boolean;
    authorizedUser?: string;
    icon: string;
  }