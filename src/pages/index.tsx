import type { NextPage } from "next";
import Head from "next/head";
import { useIntl } from "react-intl";
import Herobutton from "../components/Herobutton";
import styles from "../styles/Home.module.css";
import { sanityClient } from "../lib/sanity";
import BlockchainNFTBlock from "../components/BlockchainNFTBlock";
import Footer from "../components/Footer";
import { User } from "../lib/typings";

const userQuery = `*[_type == 'user'][0]{
  profilePicture,
  fullName,
  jobTitle,
  email,
  linkedIn,
  telephone,
  github,
  nftWallet,
  introduction,
  coverLetter,
}`;
interface Props{
  data:{
    user:User,
  }
}

const Home = ( {data}  : Props) => {
  const intl = useIntl();
  const {user} = data;

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Add hreflang links */}
        <link rel="alternate" href="/" hrefLang="x-default" />
        <link rel="alternate" href="/" hrefLang="en" />
        <link rel="alternate" href="/es" hrefLang="es" />
        <link rel="alternate" href="/pt" hrefLang="pt" />
      </Head>

      <Herobutton  {...user}  />
      <BlockchainNFTBlock {...user} />

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const user = await sanityClient.fetch(userQuery);
  return {
    props: {
      data: {
        user,
      },
    },
  };
}
