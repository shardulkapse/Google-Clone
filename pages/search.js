import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results, term }) {
  const router = useRouter();
  console.log(results);
  return (
    <div className="bg-gray-900">
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header term={term} />
      <SearchResults results={results} />
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const term = context.query.term;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  //After the server has rendered, pass the results to the client

  return {
    props: {
      results: data,
      term: term,
    },
  };
}
