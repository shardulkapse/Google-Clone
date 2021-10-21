import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto h-full min-h-screen w-full px-[10%] sm:pl-[10%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-500 text-sm mb-5 pt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {!results.items && <h1 className="text-white text-6xl mb-[350px]">No Results Found</h1> }

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
            <div className="group">
                <a href={result.link} className="text-sm text-gray-400">{result.formattedUrl}</a>
                <a href={result.link}><h1 className="text-blue-500 text-xl truncate font-medium group-hover:underline">{result.title}</h1></a>
            </div>
            <p className="text-gray-400">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
