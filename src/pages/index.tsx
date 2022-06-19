import type { NextPage } from "next";
import Head from "next/head";
import { useIntl } from "react-intl";
import { InferGetStaticPropsType } from "next";
import Herobutton from "../components/Herobutton";
import styles from "../styles/Home.module.css";
import { sanityClient } from "../lib/sanity";
import BlockchainNFTBlock from "../components/BlockchainNFTBlock";
import Footer from "../components/Footer";

const userQuery = `*[_type == 'user'][0]`;

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage = ({ data }: any) => {
  const intl = useIntl();

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

      <Herobutton user={data.user} key="heroButton" />
      <BlockchainNFTBlock user={data.user} />

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
