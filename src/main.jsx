import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import { register } from 'swiper/element/bundle';
import Properties from './components/Properties/Properties';
import Services from './components/Services/Services';
import About from './components/About/About';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import CategoryWiseProperty from './components/CategoryWiseProperty/CategoryWiseProperty';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
// register Swiper custom elements
register();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/properties',
      element: <Properties></Properties>,
      loader: () => fetch('properties.json')
    },
    {
      path: '/services',
      element: <Services></Services>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/profile',
      element: <Profile></Profile>
    },
    {
      path: '/update_user_profile',
      element: <UpdateProfile></UpdateProfile>
    },
    {
      path: '/property/:id',
      loader: () => fetch('properties.json'),
      element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>
    },
    {
      path: '/category/:segment',
      loader: () => fetch('properties.json'),
      element: <CategoryWiseProperty></CategoryWiseProperty>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
