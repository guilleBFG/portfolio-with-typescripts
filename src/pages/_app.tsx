import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { Languages } from "../lang/languajes";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  let { locale , defaultLocale } = useRouter();

  if (typeof locale !== "string"){
    locale = 'en';
  }

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={Languages[locale as keyof typeof Languages ] }
    >
      <Navbar {...pageProps}/>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
