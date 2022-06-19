import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-800">
        <Link href={`https://nextjs.org/`}>
          <a className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <div>
              Created with{" "}
              <span className="text-center text-base text-cyan-200 hover:text-yellow-300 hover:underline font-bold tracking-wide">
                NextJs
              </span>
            </div>
          </a>
        </Link>
        <Link href={`https://sanity.io/`}>
          <a className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <div>
              and{" "}
              <span className="text-center text-base text-cyan-200 hover:text-yellow-300 hover:underline font-bold tracking-wide">
                Sanity
              </span>
            </div>
          </a>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
