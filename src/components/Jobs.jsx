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
          {isNew && <span>New!</span>}
          {featured && <span>Featured</span>}
        </p>

        <p className="jobs-position">{position}</p>

        <div className="jobs-info">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="jobs-tags">
        {tags.map((tag, i) => (
          <span key={i} id={tag} onClick={() => handleTag(tag)} className='tag'>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Jobs