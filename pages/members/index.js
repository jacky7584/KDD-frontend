import React from 'react';

import Head from 'next/head';
import Layout from '../../layouts/default';
import MasterCard from '../../components/Cards/MasterCard';
import AlumniCard from '../../components/Cards/AlumniCard';
import axiosInstance from '../../components/axiosInstance';

import en from '../../i18n/en.json';
import zh from '../../i18n/zh.json';

const title = {
  en: { title: en.header, prefix: en.navbar.members },
  zh: { title: zh.header, prefix: zh.navbar.members },
};

export async function getServerSideProps({ locale }) {
  const res = await axiosInstance.get(
    `/members-page?populate[MasterMembers][populate]=%2A&populate[AlumniMembers][populate]=%2A`
  );
  const json = await res.data;
  const content = json['data']['attributes'];

  return {
    props: { content, locale },
  };
}

export default function MembersIndex({ content, locale }) {
  return (
    <>
      <Head>
        <title>
          {title[locale].prefix} | {title[locale].title}
        </title>
        <meta property="og:title" content={`${title[locale].prefix} | ${title[locale].title}`} />
      </Head>
      <h1 className="hidden">
        {title[locale].prefix} | {title[locale].title}
      </h1>
      <section className="flex relative min-h-screen py-16">
        <div className="container mx-auto justify-center p-2 md:my-auto">
          <div className="p-6 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-700">{content['MasterTitle']}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-4">
              {content['MasterMembers']['data'].map((member, idx) => (
                <MasterCard key={idx} {...member.attributes} />
              ))}
            </div>
          </div>
          <div className="border-t p-6 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-700">{content['AlumniTitle']}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
              {content['AlumniMembers']['data'].map((member, idx) => (
                <AlumniCard key={idx} {...member.attributes} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

MembersIndex.layout = Layout;
