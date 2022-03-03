import Image from 'next/image'

import searchIcon from '@icons/search.svg'
import closeIcon from '@icons/close.svg'

const Search: React.FC = () => {
  return (
    <section className="flex w-80 items-center rounded-3xl bg-background py-3 px-6">
      <div className="h-4 w-4">
        <Image src={searchIcon} layout="responsive" />
      </div>
      <input
        type="text"
        placeholder="Search in Web3Block"
        className="ml-4 bg-transparent focus:outline-none"
      />
      <button className="ml-auto rounded-full bg-sea p-2">
        <div className="h-3 w-3">
          <Image src={closeIcon} layout="responsive" />
        </div>
      </button>
    </section>
  )
}

export default Search
