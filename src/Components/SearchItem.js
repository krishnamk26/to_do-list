import React from 'react'

function SearchItem({search, setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search Item</label>
        <input 
            type='text'
            id='search'
            role='searchbox'
            placeholder='Search Item'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem