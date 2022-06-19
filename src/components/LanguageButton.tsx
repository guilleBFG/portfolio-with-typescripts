import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useIntl } from "react-intl";
import { useRouter  } from 'next/router'

export default function LanguageButton({ locales }) {
  const intl = useIntl();
  const router = useRouter()

  return (
    <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-cente">
      <Menu as="div" className="relative inline-block text-left">
        <div className="text-left object-left">
          <Menu.Button className=" inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-12 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {intl.formatMessage({ id: "page.navbar.language" })}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="lg:absolute sm:inline-flex  w-full  justify-center rounded-md bg-gray-400 bg-opacity-20 px-4 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {[...locales].sort().map((locale) => (
              <div key={locale} className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link  href={router.pathname ?? "/"} locale={locale} passHref>
                      <a>
                        <button
                          className={`${
                            active
                              ? "bg-gradient-to-r  hover:from-pink-500 hover:to-pink-300text-white font-bold text-white"
                              : "text-white"
                          }  lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-white font-bold items-center justify-center bg-gradient-to-r  hover:from-pink-500 hover:to-pink-300`}
                        >
                          {locale}
                        </button>
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
