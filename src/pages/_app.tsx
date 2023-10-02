import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/pages/components/Layout";
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <title>Posts</title>
          </Head>
          <Script
              src="https://connect.facebook.net/en_US/sdk.js"
              strategy="lazyOnload"
              onLoad={() =>
                  console.log(`script loaded correctly, window.FB has been populated`)
              }
          />
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}
