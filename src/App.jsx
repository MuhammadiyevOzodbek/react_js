import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NavbarLayout from './App/Layout/NavbarLayout'
import NotPage from './App/NotFound/NotPage'
import Home from './App/Pages/Home/Home'
import Course from './App/Pages/Curse/Course'
import CourseOne from './App/Pages/Curse/AllCourse/1/CourseOne'
import LogIn from './App/Log/LogIn'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          children: [
          ]
        },
        {
          path: '/course',
          element: <Course/>,
          children: [
          ]
        },
        {
          path: '/course/1',
          element: <CourseOne/>
        }
      ]
    },
    {
      path: '/log_in',
      element: <LogIn/>
    },
    {
      path: '*',
      element: <NotPage/>
    }
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
