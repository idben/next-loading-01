import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.sass";
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== Router.asPath && setLoading(true);

    // const handleStart = (url) => {
    //   if (url !== Router.asPath) {
    //     setLoading(true);
    //   }
    // };

    const handleComplete = (url) => {
      if (url === Router.asPath) {
        setTimeout(() => {
          setLoading(false);
        }, 3000); // 延遲 3000 毫秒，即 3 秒後執行
      }
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return loading ? <div className="loading">
    <Player
      autoplay
      loop
      src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
      style={{ height: '300px', width: '300px' }}
    />
  </div> : null;
  // return (
  //   <div className="loading">
  //     加載中...
  //   </div>)
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}
