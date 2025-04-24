import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import { HelmetProvider } from 'react-helmet-async';
import Menu from './Pages/OurMenu/Menu';
import Order from './Pages/Orders/Order';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> } >
        <Route index element={ <Home/> } />
        <Route path='/menu' element={ <Menu/> } />
        <Route path='/order' element={ <Order/> } />
        <Route path='/order/:category' element={ <Order/> } />
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
