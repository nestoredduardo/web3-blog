import Loading from './Loading'
import SearchResultItem from './SearchResultItem'

type SearchResultsProps = {
  loading: boolean
  results: WriterPreview[]
}

const SearchResults: React.FC<SearchResultsProps> = ({ loading, results }) => {
  return (
    <section className="absolute z-10 mt-12 flex h-40 w-80 flex-col overflow-y-auto rounded-xl border-2 border-gray-light bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {loading && <Loading />}
      {results.length >= 1 &&
        results.map((writer) => {
          return <SearchResultItem key={writer.id} writer={writer} />
        })}
      {!loading && results.length == 0 && (
        <h3 className="mx-auto mt-6 text-gray">Not results found</h3>
      )}
    </section>
  )
}

export default SearchResults
