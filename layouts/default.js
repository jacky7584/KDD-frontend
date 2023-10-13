import React from 'react';
import Script from 'next/script';

import Navbar from '../components/Navbars/index';
import Footer from '../components/Footers/index';

export default function Layout({ children }) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GV6H1RY367" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GV6H1RY367');
        `}
      </Script>
      <div className={`flex flex-col min-h-screen`}>
        <Navbar fixed />
        {children}
        <Footer />
      </div>
    </>
  );
}
