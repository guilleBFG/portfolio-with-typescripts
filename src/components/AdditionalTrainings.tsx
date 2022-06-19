import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";
import { urlFor } from "../lib/sanity";
import moment from "moment";
function AdditionalTrainings({ additionalTraining, locale }) {
  let degreeTitle = "";
  let degreeDescription = "";
  switch (locale) {
    case "es":
      degreeTitle = additionalTraining?.degreeTitle?.es;
      degreeDescription = additionalTraining?.degreeDescription?.es;
      break;
    case "en":
      degreeTitle = additionalTraining?.degreeTitle?.en;
      degreeDescription = additionalTraining?.degreeDescription?.en;
      break;
    case "pt":
      degreeTitle = additionalTraining?.degreeTitle?.pt;
      degreeDescription = additionalTraining?.degreeDescription?.pt;
      break;
    default:
      degreeTitle = additionalTraining?.degreeTitle?.en;
      degreeDescription = additionalTraining?.degreeDescription?.en;
      break;
  }
  return (
    <>
      <div className="p-3">
        <div className=" lg:grid-rows-2 w-full lg:max-w-full   rounded-xl">
          <div className="ml-4">
            <Image
              className=" h-48 lg:h-auto lg:w-48 bg-white flex-none bg-cover border rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              width={200}
              height={100}
              src={urlFor(additionalTraining.institutionImage).url()}
              alt="Company Logo"
            />
          </div>
          <div className="  w-full  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="font-bold text-white text-xl mb-2">
                {`${degreeTitle} ${moment(additionalTraining.fromDate).format(
                  "DD-MM-YYYY"
                )}`}
              </div>
              <blockquote>
                <PortableText
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  content={degreeDescription}
                  className="text-white text-base"
                  serializers={{
                    h1: (props) => <h1 {...props} />,
                    h2: (props) => <h1 {...props} />,
                  }}
                />
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdditionalTrainings;
