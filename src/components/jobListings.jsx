import React, { useEffect, useState } from 'react'
import jobs from '../jobs.json'
import JobListing from './jobListing'
import Spinner from './spinner'

const JobListings = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([])
  const [loding, setLoding] = useState(true)

const apiUrl = isHome ? 'api/jobs?_limit=3' : 'api/jobs'
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log('unable to fetch', error);
      }
      finally {
        setLoding(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'All Jobs'}
          </h2>

          {
            loding ? (
              <Spinner loading={loding} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobListing key={job.id} job={job} />
                ))}
              </div>
            )
          }



        </div>
      </section>
    </>
  )
}

export default JobListings