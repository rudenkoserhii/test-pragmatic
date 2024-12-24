import { Html, Head, Main, NextScript } from "next/document";
import { JSX } from "react";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
