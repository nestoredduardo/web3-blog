import { RootState } from '@store'
import { connect, ConnectedProps } from 'react-redux'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { search } from '@searchActions'

import SearchIcon from './SearchIcon'
import SearchResults from './SearchResults'
import closeIcon from '@icons/close.svg'

const Search: React.FC<PropsFromRedux> = ({ search, loading, results }) => {
  const inputRef = useRef<HTMLLabelElement | null>(null)
  const [input, setInput] = useState<string>('')

  const handleClean = () => {
    setInput('')
    inputRef.current && inputRef.current.focus()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value
    setInput(newInput)
    if (newInput.length > 2) {
      const timeoutId = setTimeout(() => {
        search(newInput)
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }

  return (
    <label className="relative block" ref={inputRef}>
      {input && <SearchResults loading={loading} results={results} />}
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
        onChange={handleChange}
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

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.search.loading,
    results: state.search.results,
  }
}

const mapDispatchToProps = {
  search,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Search)
