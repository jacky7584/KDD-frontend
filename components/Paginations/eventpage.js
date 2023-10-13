import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router.js';
import { useEffect, useState } from 'react';
import axiosInstance from '../../components/axiosInstance';
import en from '../../i18n/en.json';
import zh from '../../i18n/zh.json';

const content = {
  en: en.footer,
  zh: zh.footer,
};

export  default function EventPagination({idx}) {
  let pageIntoArray = Array.from(Array(idx).keys())
  let btn = (e) => {
    //convert input text to lower case
    var id = e.target.value;
    window.location.href="/dashboard/"+id;
  };
  return (
    <nav aria-label=" my-6">
    <ul className="pagination justify-content-center">
      {
        pageIntoArray.map(page => {
          return <button key={page} >
            <button  className="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded-l" value={page+1} onClick={btn}>
            {page + 1}
            </button>
          </button>
        })
      }
    </ul>
  </nav>
  );
}