import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import PortableText from "react-portable-text";
import { useRouter } from "next/router";

function Herobutton({ user }) {
  const { locale } = useRouter();

  let content = "";
  switch (locale) {
    case "es":
      content = user?.introduction?.es;
      break;
    case "en":
      content = user?.introduction?.en;

      break;
    case "pt":
      content = user?.introduction?.pt;

      break;
    default:
      content = user?.introduction?.en;
      break;
  }

  return (
    <div className="w-screen flex flex-col bg-gray-800 border-gray-700  md:p-0 bg-black-800 items-center">
      <Image
        className="w-24 h-24 rounded-full"
        width={150}
        height={150}
        src={urlFor(user.profilePicture).url()}
        alt="Profile Picture"
      />
      <PortableText
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        content={content}
        className="pt-8 text-center text-white max-w-xl"
        serializers={{
          h1: (props) => <h1 {...props} />,
          h2: (props) => <h1 {...props} />,
        }}
      />
    </div>
  );
}

export default Herobutton;
