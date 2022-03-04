import Image from 'next/image'
import { useRef, useState } from 'react'

import SearchIcon from './SearchIcon'

import closeIcon from '@icons/close.svg'

const Search: React.FC = () => {
  const inputRef = useRef<HTMLLabelElement | null>(null)
  const [input, setInput] = useState<string>('')

  const handleClean = () => {
    setInput('')
    inputRef.current && inputRef.current.focus()
  }

  return (
    <label className="relative block" tabIndex={0} ref={inputRef}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-6">
        <SearchIcon
          width={16}
          height={16}
          styles={input ? 'fill-sea' : 'fill-gray'}
        />
      </span>
      <input
        type="text"
        placeholder="Search in Web3Block"
        className="block w-80 rounded-2xl bg-background py-2 pl-14 pr-14 shadow-sm placeholder:italic placeholder:text-gray focus:border-sea focus:bg-white focus:outline-none focus:ring-1 focus:ring-sea sm:text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          <button
            className="z-10 h-fit rounded-full bg-sea p-2"
            onClick={handleClean}
          >
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
