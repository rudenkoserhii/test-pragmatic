import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JSX } from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
