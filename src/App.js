import { useEffect, useState } from 'react';
import Jobs from './components/Jobs'
import Header from './components/Header'
import jobsData from './data.json'



function App() {
  const [jobs, setJobs] = useState(jobsData)
  const [filters, setFilters] = useState([])

  const filterFunc = ({role, level, languages, tools}) => {
    if (filters.length === 0) return true

    const tags = [role, level]

    if (languages) tags.push(...languages)
    if (tools) tags.push(...tools)

    return tags.some(tag => filters.includes(tag))
  }

  const handleTag = (tag) => {
    if(filters.includes(tag)) return
    setFilters([...filters, tag])
  }

  console.log(filters)

  const filteredJobs = jobs.filter(filterFunc)

  return (
    <main className="App">
      <Header filters={filters} setFilters={setFilters} />
      <div className='jobs container'>
        {filteredJobs.map(job => (
          <Jobs 
            job={job} 
            key={job.id} 
            handleTag={handleTag} 
          />
        ))}
      </div>
    </main>
  );
}

export default App;
