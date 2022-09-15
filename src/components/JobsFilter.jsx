import React from 'react'
import cross from '../icon-remove.svg'

const JobsFilter = ({filters, setFilters}) => {

  const handleFilter = (tag) => {
    setFilters(filters.filter(f => f !== tag))
  }

  const handleClear = () => {
    setFilters([])
  }
  
  return (
    filters.length > 0 && (
      <div className="jobs-filter container">
        <div className="jobs-filter-tag">
          {filters.map(tag => (
            <p onClick={() => handleFilter(tag)} className='tag'>{tag} <img src={cross} alt="" /></p>
          ))}
        </div>
        <button onClick={handleClear}>Clear</button>
      </div>
    )
  )
}

export default JobsFilter