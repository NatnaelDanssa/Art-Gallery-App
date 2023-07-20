import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
export const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR(URL, fetcher);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} data={data} isLoading={isLoading} />
      </Layout>
    </>
  );
}
