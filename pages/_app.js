import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.sass";
import Loading from "@/component/Loading";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Loading time={3000} path="/data/lf20_UJNc2t.json" />
      <Component {...pageProps} />
    </>
  );
}
