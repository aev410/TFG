import React from 'react'

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
        {
            results.map((results, id) => {
                return <div key={id}>{results.name}</div>
            })
        }
    </div>
  )
}

export default SearchResultsList;