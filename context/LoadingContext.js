import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [waittingTime, setWaittingTime] = useState(0);
  const router = useRouter();

  const waitting = (t) => {
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve();
      },t);
    });
  }

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };
    const handleComplete = async () => {
      if(waittingTime > 0){
        await waitting(waittingTime);
      }
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;