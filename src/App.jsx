import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NavbarLayout from './App/Layout/NavbarLayout'
import NotPage from './App/NotFound/NotPage'
import Home from './App/Pages/Home/Home'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
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
