import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/footer.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
          key="http"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
