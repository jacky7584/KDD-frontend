import React from 'react';
import Head from 'next/head';
import Layout from '../layouts/default';
import AlumniCard from '../components/Cards/AlumniCard';

import axiosInstance from '../components/axiosInstance';

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const title = {
  en: { title: en.header, prefix: en.navbar.contact },
  zh: { title: zh.header, prefix: zh.navbar.contact },
};

export async function getServerSideProps({ locale }) {
  const res = await axiosInstance.get(
    `/contact?locale=${locale}&populate[ContactPerson][populate]=%2A&populate[Address][populate]=%2A&populate[Tel][populate]&populate[OfficeHour][populate]`
  );
  const json = await res.data;
  const content = json['data']['attributes'];

  return {
    props: { content, locale },
  };
}

export default function Contact({ content, locale }) {
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
      <section className="flex relative md:min-h-screen py-16">
        <div className="container mx-auto justify-center p-2 md:my-auto">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-700">{content['Header']}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h3 className="my-3 font-semibold text-xl sm:text-2xl text-slate-700">{content['Lab']}</h3>
                <h4 className="my-3 font-medium text-md sm:text-lg text-slate-700">
                  {content['OfficeHour']['Header']}
                </h4>
                <div className="my-3 font-normal text-sm sm:text-md text-slate-500">
                  {content['OfficeHour']['Content']}
                </div>
                <h4 className="my-3 font-medium text-md sm:text-lg text-slate-700">{content['Tel']['Header']}</h4>
                <div className="my-3 font-normal text-sm sm:text-md text-slate-500">{content['Tel']['Content']}</div>
                <h4 className="my-3 font-medium text-md sm:text-lg text-slate-700">{content['Address']['Header']}</h4>
                <div className="my-3 font-normal text-sm sm:text-md text-slate-500">
                  {content['Address']['Content']}
                </div>
                <h4 className="my-3 font-medium text-md sm:text-lg text-slate-700">{content['ContactPersonHeader']}</h4>
                <AlumniCard {...content['ContactPerson']['data']['attributes']} />
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2772.6205859305783!2d121.54478349728024!3d25.014974772510268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa23fdb8fd51%3A0xf6126da2dfe50537!2z5Y-w54Gj56eR5oqA5aSn5a2456CU5o-a5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1656496442708!5m2!1szh-TW!2stw"
                  style={{ border: 0 }}
                  className="w-full h-96 md:h-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Contact.layout = Layout;
