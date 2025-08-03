import React from 'react'

type SearchProps = {
  searchVal: string;
  setSearchVal: (value: string) => void;
  onSubmitSearch: () => void;
  isLoading: boolean;
}

const Search: React.FC<SearchProps> = ({ searchVal, isLoading, setSearchVal, onSubmitSearch }) => {
  return (
    <form className="max-w-[50rem] mx-auto" onSubmit={() => onSubmitSearch()}>   
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)}
            className="w-full p-4 rounded-2xl ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:border-blue-200 focus:ring-1 focus:ring-blue-200 focus:outline-none transition-colors duration-150"/>
            <button disabled={isLoading} type="submit" className="text-white flex gap-3 items-center justify-center absolute cursor-pointer end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
              {isLoading && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )} Search</button>
        </div>
    </form>
  )
}

export default Search
