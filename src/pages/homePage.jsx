import React from 'react'
import Hero from '../components/hero'
import JobListings from '../components/jobListings'
import ViewAllJobs from '../components/viewAllJobs'
import HomeCards from '../components/homeCards'

const HomePage = () => {
  return (
    <>
     <Hero  />
     <HomeCards />
     <JobListings />
     <ViewAllJobs />
    </>
  )
}

export default HomePage