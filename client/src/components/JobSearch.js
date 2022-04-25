import React, { useState } from "react";
import { Link } from 'react-router-dom';

function JobSearch ({allJobs}) {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    
    const filterJobs = (allJobs, query) => {
      if (!query) {
          return allJobs;
      }
    
      return allJobs.filter((job) => {
          const jobRole = job.role.toLowerCase();
          return jobRole.includes(query);
      });
    };
    
    const filteredJobs = filterJobs(allJobs, searchQuery);

    return (
        <div>
            <form action="/" method="get">
            <label htmlFor="header-search">
            <span className="visually-hidden">Search Jobs</span>
            </label>
            <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            />
        <button type="submit">Search</button>
            <ul>
          {filteredJobs.map((job) => (
              <li>
              <Link to={`jobs/${job.id}`}key={job.id}>{job.role}{""}</Link>
              </li>
          ))}
        </ul>
    </form>
        </div>
    )
}

export default JobSearch