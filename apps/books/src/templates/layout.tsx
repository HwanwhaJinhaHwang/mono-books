import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { classNames } from '../utils/classNames';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Books', href: '/books' },
];

const Layout = () => {
  const location = useLocation();
  return (
    <div className="bg-slate-100 dark:bg-gray-900 h-screen">
      <Disclosure
        as="nav"
        className="bg-slate-100 dark:bg-gray-900 border-b-[1px] border-b-gray-400 dark:border-b-gray-500"
      >
        {({ open }) => (
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href === location.pathname
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={
                          item.href === location.pathname ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
      <Outlet />
    </div>
  );
};

export default Layout;
