import Head from 'next/head';
import { SessionProvider, useSession } from 'next-auth/react';
import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from 'next/router.js';

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const content = {
  en: en.header,
  zh: zh.header,
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const router = useRouter();
  const locale = router.locale;

  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{content[locale]}</title>
        <meta property="og:title" content={content[locale]} />
        <meta
          name="description"
          content="本實驗室主要研究領域為資料探勘（Data Mining）技術，資料探勘之主要整體概念在於從資料當中提取各種資訊，並轉化為較易於理解的知識結構以供進一步應用。"
        />
        <meta
          property="og:description"
          content="本實驗室主要研究領域為資料探勘（Data Mining）技術，資料探勘之主要整體概念在於從資料當中提取各種資訊，並轉化為較易於理解的知識結構以供進一步應用。"
        />
        <meta property="og:site_name" content={content[locale]} />
        <meta property="og:image" content="https://kdd.csie.ntust.edu.tw/img/ntust_kdd_lab.png" />
        <meta property="og:url" content="kdd.csie.ntust.edu.tw" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
        <link rel="manifest" href="/site.webmanifest" />
        {/* for google search console */}
        <meta name="google-site-verification" content="v-FxiOaP1ITDLWvFDv0azBDK2ksxQF7pDETwcamAbzc" />
      </Head>
      <Layout>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

MyApp.defaultProps = {
  auth: false,
};

export default MyApp;
