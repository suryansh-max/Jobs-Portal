import React from 'react'
import {Route , createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/homePage'
import MainLayout from './layouts/mainLayout'
import JobsPage from './pages/jobspage'
import JobPage from './pages/jobPage'
import NotFound from './pages/notFound'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='/*' element={<NotFound />}></Route>
    </Route>
    
    )
  )
  return <RouterProvider router={router} />
}

export default App
