import "styles/globals.scss";
import "semantic-ui-css/semantic.min.css";
import "swiper/css/bundle";
import useMounted from "hook/useMounted";
import Loading from "components/Loading";
import NextNProgress from "nextjs-progressbar";
import { ResponsiveContainer } from "components/WrapContainer";
import Categories from "components/Categories";

function MyApp({ Component, pageProps }) {
  const mounted = useMounted();
  return mounted ? (
    <ResponsiveContainer>
      <NextNProgress height={8} color="#209cee" />
      <Component {...pageProps} />
    </ResponsiveContainer>
  ) : (
    <Loading />
  );
}

export default MyApp;
