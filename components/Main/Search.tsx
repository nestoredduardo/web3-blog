import Image from 'next/image'
import { useState } from 'react'

import SearchIcon from './SearchIcon'

import closeIcon from '@icons/close.svg'

const Search: React.FC = () => {
  const [searching, setSearching] = useState(false)

  const handleInputChange = () => {}

  return (
    <label className="relative block ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-6">
        <SearchIcon width={16} height={16} styles="fill-gray" />
      </span>
      <input
        type="text"
        placeholder="Search in Web3Block"
        className="block w-80 rounded-2xl bg-background py-2 pl-14 pr-14 shadow-sm placeholder:italic placeholder:text-gray focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        onChange={handleInputChange}
      />
      {searching && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          <button className="inline-block h-fit rounded-full bg-sea p-2">
            <div className="h-3 w-3">
              <Image src={closeIcon} layout="responsive" />
            </div>
          </button>
        </span>
      )}
    </label>
  )
}

export default Search
