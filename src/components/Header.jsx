import React from 'react'
import JobsFilter from './JobsFilter'

const Header = ({ filters, setFilters }) => {
  return (
    <header className='header'>
      <JobsFilter filters={filters} setFilters={setFilters} />
    </header>
  )
}

export default Header