import React from 'react'

const Jobs = ({ handleTag, 
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  }
}) => {

  const tags = [role, level]

  if (languages) tags.push(...languages)
  if (tools) tags.push(...tools)

  return (
    <div className={`jobs-each ${featured && 'featured'}`}>
      <div className="jobs-img">
        <img src={logo} alt={company} />
      </div>

      <div className='jobs-desc'>
        <p className='jobs-company'>
          {company}
          {isNew && <p>New!</p>}
          {featured && <p>Featured</p>}
        </p>

        <p className="jobs-position">{position}</p>

        <div className="jobs-info">
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>

      <div className="jobs-tags">
        {tags.map((tag, i) => (
          <p key={i} onClick={() => handleTag(tag)} className='tag'>{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default Jobs