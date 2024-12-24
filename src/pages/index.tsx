import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_ROUTES } from '@/enums';

const TIMEOUT = 2000;

const Home: React.FC = () => {
  const router = useRouter();
  

  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      setIsRedirecting(true);
      router.push(API_ROUTES.TRANSACTIONS);
    }, TIMEOUT);
  
    return () => clearTimeout(redirectTimer);
  }, [router]);
  
  if (isRedirecting) {
    return <h1 className='text-2xl text-center mb-5'>Redirecting...</h1>;
  }

  return (
    <div>
      <h1 className='text-2xl text-center mb-5'>Welcome to My Wallet App</h1>
      <p className='text-sm text-center text-[--text-secondary]'>You will be redirected to the transactions page shortly...</p>
      <p className='text-sm text-center text-[--text-secondary]'>Or click <Link href="/transactions">here</Link> to go now.</p>
    </div>
  );
};

export default Home;

