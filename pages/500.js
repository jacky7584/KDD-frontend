import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../layouts/default';

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const content = {
  en: en.header,
  zh: zh.header,
};

export default function Error500() {
  const router = useRouter();
  const locale = router.locale;
  return (
    <>
      <Head>
        <title>500 | {content[locale]}</title>
      </Head>
      <section className="header relative pt-16 items-center flex h-screen">
        <div className="container mx-auto items-center flex flex-wrap flex-row justify-center">
          <div className="w-full text-center md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-slate-600">500</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">INTERNAL SERVER ERROR</p>
          </div>
        </div>
      </section>
    </>
  );
}

Error500.layout = Layout;
