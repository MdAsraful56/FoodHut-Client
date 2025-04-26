import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import { HelmetProvider } from 'react-helmet-async';
import Menu from './Pages/OurMenu/Menu';
import Order from './Pages/Orders/Order';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './Providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layouts/Dashboard';
import Cart from './Pages/Dashboard/Cart';
import Contact from './Pages/Contact/Contact';
import PrivateRoute from './Routes/PrivateRoute';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* main layout section  */}
        <Route path='/' element={ <MainLayout/> } >
          <Route index element={ <Home/> } />
          <Route path='/menu' element={ <Menu/> } />
          <Route path='/order' element={ <Order/> } />
          <Route path='/order/:category' element={ <Order/> } />
          <Route path='/contact' element={ <PrivateRoute><Contact/></PrivateRoute>} />
          <Route path='/login' element={ <Login/> } />
          <Route path='/registration' element={ <Registration/> } />
        </Route>
        {/* dashboard layout section  */}
        <Route path='/dashboard' element={ <Dashboard/> } >
          <Route path='cart' element={ <Cart/> } />
        </Route>
      </Route>
    )
  )

  const queryClient = new QueryClient()

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
