import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './ErrorPage';
import Home from './Home';
import AllTouristsSpot from './pages/AllTouristsSpot';
import AddTouristsSpot from './pages/AddTouristsSpot';
import Register from './pages/Register';
import Login from './pages/Login';
import MyLists from './pages/MyLists';
import AuthProvider from './components/AuthProvider';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import SpotCardDetails from './pages/SpotCardDetails';
import UpdateSpot from './pages/updateSpot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://travel-asia-server-eight.vercel.app/touristsSpot'),
      },
      {
        path: '/touristsSpot/:id',
        element: <PrivateRoute><SpotCardDetails></SpotCardDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://travel-asia-server-eight.vercel.app/touristsSpot/${params.id}`)
      },
      {
        path: '/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params})=>fetch(`https://travel-asia-server-eight.vercel.app/touristsSpot/${params.id}`)
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/addTouristsSpot',
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyLists></MyLists></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
