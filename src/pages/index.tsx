// src/pages/index.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home: React.FC = () => {
  const router = useRouter();
  

  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      setIsRedirecting(true);
      router.push('/transactions');
    }, 2000);
  
    return () => clearTimeout(redirectTimer);
  }, [router]);
  
  if (isRedirecting) {
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      <h1>Welcome to My Wallet App</h1>
      <p>You will be redirected to the transactions page shortly...</p>
      <p>Or click <Link href="/transactions">here</Link> to go now.</p>
    </div>
  );
};

export default Home;

