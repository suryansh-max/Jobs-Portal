import React from 'react'
import {Route , createBrowserRouter, createRoutesFromElements, RouterProvider, json} from 'react-router-dom'
import HomePage from './pages/homePage'
import MainLayout from './layouts/mainLayout'
import JobsPage from './pages/jobspage'
import JobPage,{dataLoader} from './pages/jobPage'
import NotFound from './pages/notFound'
import AddJob from './pages/addJob'


const App = () => {

  const submitJob = async (job) =>{
    // console.log(job);
    const res = await fetch('api/jobs' , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(job)
    })
    return
  }

  const deleteJob = async (id) =>{
    console.log('delete', id);
    const res = await fetch(`/api/jobs/${id}` , {
      method : 'DELETE',
    })
    return

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob = { deleteJob } />} loader={dataLoader} />
      <Route path='/add-job' element={<AddJob  addJobSubmit={submitJob} />} />
      <Route path='/*' element={<NotFound />}></Route>
    </Route>
    
    )
  )
  return <RouterProvider router={router} />
}

export default App
