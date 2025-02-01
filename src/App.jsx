import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NavbarLayout from './App/Layout/NavbarLayout'
import NotPage from './App/NotFound/NotPage'
import Home from './App/Pages/Home/Home'
import Course from './App/Pages/Curse/Course'
import CourseOne from './App/Pages/Curse/AllCourse/1/CourseOne'
import LogIn from './App/Log/LogIn'
import Contact from './App/Pages/Contact/Contact'
import CourseTwo from './App/Pages/Curse/AllCourse/2/CourseTwo'
import CourseThere from './App/Pages/Curse/AllCourse/3/CourseThere'
import CourseFour from './App/Pages/Curse/AllCourse/4/CourseFour'
import CourseFive from './App/Pages/Curse/AllCourse/5/CourseFive'
import CourseSix from './App/Pages/Curse/AllCourse/6/CourseSix'
import Dash from './App/Pages/Dashboard/Dash'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/course',
          element: <Course/>,
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/course/1',
          element: <CourseOne/>
        },
        {
          path: '/course/2',
          element: <CourseTwo/>
        },
        {
          path: '/course/3',
          element: <CourseThere/>
        },
        {
          path: '/course/4',
          element: <CourseFour/>
        },
        {
          path: '/course/5',
          element: <CourseFive/>
        },
        {
          path: '/course/6',
          element: <CourseSix/>
        },
        {
          path: '/dashboard',
          element: <Dash/>
        }
      ]
    },
    {
      path: '/sing_in',
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
