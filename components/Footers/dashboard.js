import Link from 'next/link';
import React from 'react';

export default function DashboardFooter() {
  return (
    <>
      <footer className="block py-4 mt-auto">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()} KDD Lab
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end justify-center">
                <Link href="/">
                  <li>
                    <button
                      className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                      type="button"
                    >
                      Back to home
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
