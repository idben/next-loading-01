import React, { useState, useContext, createContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.sass";
import { LoadingProvider } from '@/context/LoadingContext';
import Loading from "@/component/Loading";

export default function App({ Component, pageProps }) {

  return (
    <LoadingProvider>
      <Loading path="/data/lf20_UJNc2t.json" />
      <Component {...pageProps} />
    </LoadingProvider>
  );
}
