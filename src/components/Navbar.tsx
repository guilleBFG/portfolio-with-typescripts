import React,{  useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { Icon } from "@iconify/react";
import LanguageButton from "./LanguageButton";
import { Props } from "../lib/typings";



function Navbar({ data }: Props) {
  const [active, setActive] = useState(false);
  const { locales } = useRouter();
  const intl = useIntl();
  const { user } = data;

  const menuItems = [
    {
      title: intl.formatMessage({ id: "page.navbar.home" }),
      url: "/",
    },
    {
      title: intl.formatMessage({ id: "page.navbar.resume" }),
      url: "/resume",
    },
    /*{
      title: intl.formatMessage({ id: "page.navbar.projects" }),
      url: "/projects",
    },*/
  ];

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="flex items-center flex-wrap bg-gray-800 border-gray-700 p-3 ">
        <Link href={"/"}>
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Guillermo Wester
            </span>
          </a>
        </Link>

        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link
              key={user?.telephone}
              href={`https://wa.me/${user?.telephone}`}
            >
              <a
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  bg-gradient-to-r  hover:from-pink-500 hover:to-pink-300 "
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon width="30" height="30" icon="logos:whatsapp" />
              </a>
            </Link>
            <Link key={user?.github} href={user?.github ?? ''}>
              <a
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  bg-gradient-to-r  hover:from-pink-500 hover:to-pink-300"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon width="30" height="30" icon="jam:github-circle" />
              </a>
            </Link>
            <Link key={user?.email} href={`mailto:${user?.email}`}>
              <a
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-gradient-to-r  hover:from-pink-500 hover:to-pink-300"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon width="30" height="30" icon="logos:google-gmail" />
              </a>
            </Link>
            <Link key={user?.linkedIn} href={user?.linkedIn ?? ''}>
              <a
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-gradient-to-r  hover:from-pink-500 hover:to-pink-300"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon width="30" height="30" icon="logos:linkedin-icon" />
              </a>
            </Link>
            {menuItems?.map((menuItem) => (
              <Link key={menuItem.title} href={menuItem.url}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500  hover:text-white ">
                  {menuItem.title}
                </a>
              </Link>
            ))}
            <LanguageButton locales = {locales} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
