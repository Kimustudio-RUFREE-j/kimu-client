import React from 'react';
import Head from 'next/head';
import { Global } from '@emotion/react';
import { globalStyle } from '@/styles/global';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '@/components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kimu</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <link
          rel="preload"
          href="/assets/fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/OpenSansCondensed/OpenSansCondensed-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/OpenSansCondensed/OpenSansCondensed-LightItalic.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Global styles={globalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
