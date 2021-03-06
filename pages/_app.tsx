import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { PersistGate } from "redux-persist/integration/react";
import { BackTop, ConfigProvider } from "antd";
import store from "src/store/store";
import "../styles/preloader.scss";
import "../styles/variables.css";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/swiper.css";

import LoaderProvider from "src/context/loaderContext/loaderContext";
import { ThemeProvider } from "src/context/themeContext";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Provider store={store}>
        <ConfigProvider locale={ruRU}>
          <ThemeProvider>
            <LoaderProvider>
              <BackTop />
              <Component {...pageProps} />
            </LoaderProvider>
          </ThemeProvider>
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default MyApp;
