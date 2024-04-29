import React from 'react'
import JobListings from '../components/jobListings'

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>  
    <JobListings isHome={false} />
    </section>
  )
}

export default JobsPage