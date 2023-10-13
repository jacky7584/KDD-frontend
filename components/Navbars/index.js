import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router.js';

import en from '../../i18n/en.json';
import zh from '../../i18n/zh.json';

const content = {
  en: en.navbar,
  zh: zh.navbar,
};

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  const locale = router.locale;

  function changeLocale() {
    const defaultLocale = router.defaultLocale;
    const enLocale = 'en';
    router.push(router.asPath, router.asPath, { locale: locale === defaultLocale ? enLocale : defaultLocale });
  }
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" passHref>
              <button
                className="text-slate-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                type="link"
              >
                NTUST KDD Lab
              </button>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:shadow-lg ease-linear transition-all duration-150"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className={'bi ' + (navbarOpen ? 'bi-x-lg' : ' bi-list')}></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link href="/advisor">
                  <div className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    <span className="inline-block mr-2">Advisor</span>
                    <i className="text-slate-400 bi bi-box-arrow-up-right text-lg leading-lg " />
                  </div>
                </Link>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/advisor" passHref>
                  <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="link"
                  >
                    <span className="inline-block">{content[locale]['advisor']}</span>
                    {/* <i className="text-slate-400 bi bi-box-arrow-up-right text-md leading-lg " /> */}
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/members" passHref>
                  <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="link"
                  >
                    <span className="inline-block">{content[locale]['members']}</span>
                    {/* <i className="text-slate-400 bi bi-box-arrow-up-right text-lg leading-lg " /> */}
                  </a>
                </Link>
              </li>
              <li className="flex items-center ">
                <Link href="/events" passHref>
                  <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="link"
                  >
                    <span className="inline-block">{content[locale]['events']}</span>
                    {/* <i className="text-slate-400 bi bi-box-arrow-up-right text-lg leading-lg " /> */}
                  </a>
                </Link>
              </li>
              <li className="flex items-center hidden">
                <Link href="/contact" passHref>
                  <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="link"
                  >
                    <span className="inline-block">{content[locale]['contact']}</span>
                    {/* <i className="text-slate-400 bi bi-box-arrow-up-right text-lg leading-lg " /> */}
                  </a>
                </Link>
              </li>

              <li className="flex items-center ">
                <Link href="/dashboard" locale={false} passHref>
                  <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                    type="link"
                  >
                    <i className="bi bi-speedometer2"></i>
                    {/* <i className="text-slate-400 bi bi-box-arrow-up-right text-lg leading-lg " /> */}
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    changeLocale('zh-TW');
                  }}
                >
                  <i className="bi bi-translate mr-2"></i>
                  {content[locale]['language']}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
