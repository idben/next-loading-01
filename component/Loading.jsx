import { useContext, useEffect } from "react";
import Router from "next/router";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LoadingContext from "@/context/LoadingContext";

const Loading = ({path}) => {
  const { loading } = useContext(LoadingContext);

  if (!loading) return null;

  return (
    <div className="loading">
      {/* <Player
        autoplay
        loop
        src={path}
        style={{ height: "300px", width: "300px" }}
      /> */}
    </div>
  );
};

export default Loading;