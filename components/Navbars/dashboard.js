import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut,signIn } from "next-auth/react"

const NavList = ({ children }) => {
  return <ul className="lg:flex-col lg:min-w-full flex flex-col list-none">{children}</ul>;
};

const NavDivider = () => {
  return <hr className="my-4 lg:min-w-full" />;
};

const NavLink = ({ name, path, router }) => {
  return (
    <li className="items-center">
      <Link href={path}>
        <a
          className={
            'text-xs uppercase py-3 font-bold block ' +
            (router.asPath === path ? 'text-sky-500 hover:text-sky-600' : 'text-slate-700 hover:text-slate-500')
          }
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState(false);
  const router = useRouter();
  const dashboardPath = '/dashboard';
  const res = '/dashboard/resources';
  const home = '/';
  return (
    <>
      <nav className="top-0 fixed lg:relative z-50 w-full flex flex-wrap items-center justify-between lg:justify-start navbar-expand-lg bg-white shadow-xl lg:overflow-y-auto flex-col lg:flex-nowrap lg:w-80 py-4 px-6 ">
        <div className="w-full flex flex-row lg:flex-col">
          <button
            className="cursor-pointer text-black opacity-50 ml-auto lg:ml-0 lg:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow(!collapseShow)}
          >
            <i className="bi bi-github"></i>
          </button>
        </div>
        <div className={'w-full flex flex-col justify-start' + (collapseShow ? '' : ' hidden lg:block')}>
          <NavList>
            <NavLink name="Dashboard" path={dashboardPath} router={router} />
            <NavLink name="paper&progress" path={res} router={router} />
            <NavLink name="home" path={home} router={router} />
          </NavList>
          <button   className={'text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500'}  onClick={() => signOut()}>Sign-out</button>
        </div>
      </nav>
    </>
  );
}
