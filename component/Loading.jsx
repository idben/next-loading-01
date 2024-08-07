import { useState, useEffect } from "react";
import Router from "next/router";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Loading = ({time, path}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== Router.asPath && setLoading(true);

    const waitting = (t) => {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve();
        },t);
      });
    }

    const handleComplete = async (url) => {
      if (url === Router.asPath) {
        if(time && time > 0){
          await waitting(time);
        }
        setLoading(false);
      }
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, [time]);

  
  return time && time !== 0 && loading ? (
    <div className="loading">
      <Player
        autoplay
        loop
        src={path}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  ) : null;
};

export default Loading;