import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function JobDetail ( {jobId} ) {
    const [job, setJob] = useState()
    // const history = useHistory()

    const fetchEventCallback = useCallback(
      () => {
        fetch(`/jobs/${jobId}`, {
          credentials: 'include'
        })
          .then(res => res.json())
          .then(job => setJob(job))
      },
      [jobId],
    )
  
    useEffect(() => {
      fetchEventCallback()
    }, [fetchEventCallback])

    console.log(job)

    return (
        <div>
            <p>{job.role}</p>
            <Link to={`/jobs/apply/${jobId}`}>Apply</Link>
        </div>
    )
}

export default JobDetail