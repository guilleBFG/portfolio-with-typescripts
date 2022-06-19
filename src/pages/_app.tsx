import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { Languages } from "../lang/languajes";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();
  return (
    <IntlProvider
      locale={locale as any}
      defaultLocale={defaultLocale}
      messages={Languages[locale] as any}
    >
      <Navbar {...pageProps}/>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
