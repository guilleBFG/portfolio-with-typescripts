import { sanityClient } from "../lib/sanity";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import WorkHistory from "../components/WorkHistory";
import Education from "../components/Education";
import AdditionalTrainings from "../components/AdditionalTrainings";
import BlockchainNFTBlock from "../components/BlockchainNFTBlock";
import { Icon } from "@iconify/react";

import createPDF from "../components/PDF/CreatePDF";

const resumeQuery = `*[_type == 'resume'][0]{
  _id,
  user->,
  educations[]->,
  additionalTrainings[]->,
  workhistorys[]->,
}`;

function Resume({ data }: any) {
  const { locale } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.resume.head.meta.description",
  });


  let jobTitle = "";
  switch (locale) {
    case "es":
      jobTitle = data.resume?.user?.jobTitle.es;
      break;
    case "en":
      jobTitle = data.resume?.user?.jobTitle.en;
      break;
    case "pt":
      jobTitle = data.resume?.user?.jobTitle.pt;
      break;
    default:
      jobTitle = data.resume?.user?.jobTitle.en;
      break;
  }

  const generatePDF = ()=>{
    const createPdf = createPDF();
    createPdf.addPersInfo(data.resume.user, intl);
    createPdf.addWorkExperience(data.resume.workhistorys, locale,intl);
    createPdf.addEducation(data.resume.educations, locale,intl);
    createPdf.addTrainings(data.resume.additionalTrainings, locale);

    createPdf.savePDF(`${data.resume.user?.fullName} (${locale}).pdf`);

  }
  return (
    <div className="mb-0 bg-gray-800 border-gray-700 text-lg text-white text-bold text-center">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="italic">
        <div className="p-3 bg-gray-800 border-gray-700  text-4xl text-white text-bold text-center">
          {data.resume.user?.fullName}
        </div>
        <div className="p-1 bg-gray-800 border-gray-700  text-xl text-white text-bold text-center">
          {intl.formatMessage({ id: "page.resume.email" })}:
          <span className=" ml-1 font-medium subpixel-antialiased">
            {data.resume?.user?.email}
          </span>
        </div>
        <div className="p-2 bg-gray-800 border-gray-700  text-xl text-white text-bold text-center">
          {intl.formatMessage({ id: "page.resume.telephone" })}:
          <span className=" ml-1 font-medium subpixel-antialiased">
            {`+${data.resume?.user?.telephone}`}
          </span>
        </div>
        <div className="p-2 bg-gray-800 border-gray-700 text-3xl text-white text-bold text-center">
          {jobTitle}
        </div>
      </div>
      <div className="text-left ml-4">
        <button
          type="button"
          onClick={generatePDF}
          className="p-3 rounded-lg inline-flex bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
        >
          <span className="inline-flex ">
            <Icon width="30" height="30" icon="vscode-icons:file-type-pdf2" />
            {intl.formatMessage({ id: "page.resume.downloadPDF" })}
          </span>
        </button>
      </div>
      {/*Work Experience */}
      <div>
        <div className="mt-5 mb-5 ml-4 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {intl.formatMessage({ id: "page.resume.workHistory" })}
        </div>
        <div className="ml-2  grid lg:grid-cols-2 gap-5 md:grid-cols-1 sm:grid-cols-1 mt-5 mb-2 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {data.resume?.workhistorys?.map((workHistory, index) => {
            return (
              <WorkHistory
                workHistory={workHistory}
                key={index}
                locale={locale}
              />
            );
          })}
        </div>
      </div>
      {/* Education and aditional Trainings */}
      <div className="mb-0">
        <div className="mt-5 mb-5 ml-4 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {intl.formatMessage({ id: "page.resume.educationAndTrainings" })}
        </div>
        <div className="mt-5 mb-0 bg-gray-800 border-gray-700 text-4xl text-white text-bold text-left">
          {data.resume?.educations?.map((education, index) => {
            return (
              <Education education={education} key={index} locale={locale} />
            );
          })}
          {data.resume?.additionalTrainings?.map((additionalTraining, index) => {
            return (
              <AdditionalTrainings
                additionalTraining={additionalTraining}
                key={index}
                locale={locale}
              />
            );
          })}
          <BlockchainNFTBlock user={data.resume?.user} />
        </div>
      </div>
    </div>
  );
}

export default Resume;

export async function getStaticProps() {
  const resume = await sanityClient.fetch(resumeQuery);
  const user = resume.user;
  return { props: { data: { resume, user } }, revalidate: 300 };
}
