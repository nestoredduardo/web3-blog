import Image from 'next/image'

import SearchIcon from './SearchIcon'

import closeIcon from '@icons/close.svg'

const Search: React.FC = () => {
  return (
    <section className="flex w-80 items-center rounded-3xl bg-background py-3 px-6">
      <SearchIcon width={16} height={16} color="fill-gray" />
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
