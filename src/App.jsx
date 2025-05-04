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
import AllUser from './Pages/Dashboard/AllUser';
import AddItems from './Pages/Dashboard/AddItems';
// import MnageItems from './Pages/Dashboard/MnageItems';
import ManageItems from './Pages/Dashboard/ManageItems';
import Error from './Pages/404/Error';
import AdminHome from './Pages/Dashboard/AdminHome';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={ <Error/> } >
        {/* main layout section  */}
        <Route path='/' element={ <MainLayout/> } errorElement={ <Error/> } >
          <Route index element={ <Home/> } />
          <Route path='/menu' element={ <Menu/> } />
          <Route path='/order' element={ <Order/> } />
          <Route path='/order/:category' element={ <Order/> } />
          <Route path='/contact' element={ <Contact/>} />
          <Route path='/login' element={ <Login/> } />
          <Route path='/registration' element={ <Registration/> } />
        </Route>
        {/* dashboard layout section  */}
        <Route path='/dashboard' element={ <Dashboard/> } >
          <Route path='cart' element={ <Cart/> }> </Route>
          {/* admin routes  */}
          <Route path='adminHome' element={ <AdminHome/> } />
          <Route path='allUser' element={ <AllUser/> } />
          <Route path='addItems' element={ <AddItems/> } />
          <Route path='manageItems' element={ <ManageItems/> } />
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
