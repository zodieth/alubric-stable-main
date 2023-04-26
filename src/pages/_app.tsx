import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export default function App(
  { Component, pageProps }: AppProps,
  { Session }: any
) {
  return (
    <SessionProvider session={Session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
