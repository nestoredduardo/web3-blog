import { useEffect, useState } from 'react'

import Loading from './Loading'
import SearchResultItem from './SearchResultItem'

type SearchResultsProps = {
  loading: boolean
  results: WriterPreview[]
  input: string
}

const SearchResults: React.FC<SearchResultsProps> = ({
  loading,
  results,
  input,
}) => {
  const [fade, setFade] = useState(true)
  useEffect(() => {
    setTimeout(() => setFade(false), 1000)
  }, [])

  return (
    <section
      className={
        'absolute z-10 mt-12 flex max-h-40 min-h-fit w-80 flex-col overflow-y-auto rounded-xl border-2 border-gray-light bg-white py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-96 lg:max-h-80 lg:w-[450px] xl:w-[540px] ' +
        (fade && 'animate-fade-in-down')
      }
    >
      {(loading || input.length <= 2) && <Loading />}
      {results.length >= 1 &&
        results.map((writer) => {
          return <SearchResultItem key={writer.id} writer={writer} />
        })}
      {!loading && input.length > 2 && results.length == 0 && (
        <h3 className="mx-auto text-gray">Not results found</h3>
      )}
    </section>
  )
}

export default SearchResults
