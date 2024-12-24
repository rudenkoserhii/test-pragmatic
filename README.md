# Test Task: Wallet App

This project implements a mobile wallet application with React.js (Next.js) and TypeScript, focusing on displaying transaction lists and individual transaction details.

## Project Overview

- **Frameworks**: React.js (Next.js), TypeScript
- **UI Library**: Tailwind CSS
- **Icons**: FontAwesome
- **Data**: JSON mock data for transactions and user details

### Features

- **TransactionsList**: 
  - Displays a list of recent transactions
  - Shows card balance, daily points, and payment status
  - Each transaction includes:
    - Type (Payment or Credit)
    - Amount
    - Name of the transaction (e.g., IKEA)
    - Description
    - Date (day name for last week or full date for older transactions)
    - Pending status
    - Authorized user name if applicable
    - Icon from FontAwesome

- **TransactionDetail**: 
  - Detailed view of a selected transaction from the list

#### Structure

```plaintext
test-pragmatic/
├── public/
│   ├── data/
│   │   └── mock.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CardBalanceBlock.tsx
│   │   ├── DailyPointsBlock.tsx
│   │   ├── LatestTransactionsBlock.tsx
│   │   ├── PaymentDueBlock.tsx
│   │   └── TransactionDetail.tsx
│   ├── constants/
│   │   ├── index.ts
│   │   └── monthes.ts
│   ├── enums/
│   │   ├── api-routes.enum.ts
│   │   └── index.ts
│   ├── helpers/
│   │   ├── getIcon.ts
│   │   ├── index.ts
│   │   └── shuffleArray.ts
│   ├── pages/
│   │   ├── transaction/
│   │   │   └── [id].tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── transactions.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   ├── balance.type.ts
│   │   ├── due.type.ts
│   │   ├── index.ts
│   │   ├── points.type.ts
│   │   └── transaction.type.ts
│   └── utils/
│       ├── calculatePoints.ts
│       ├── formatDate.ts
│       ├── formatPoints.ts
│       └── index.ts
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

##### Setup

- Install Dependencies:
```bash
npm install
```

- Run the Development Server:
```bash
npm run dev
```

- Build for Production:
```bash
npm run build
```

- Start Production Server:
```bash
npm start
```