import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> } >
        <Route index element={ <Home/> } />
      </Route>
    )
  )



  return (
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  )
}

export default App
