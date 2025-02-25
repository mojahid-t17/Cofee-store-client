import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import AddCofee from './assets/Components/AddCofee.jsx';
import DisplayCofee from './assets/Components/DisplayCofee.jsx';
import DisplayUsers from './assets/Components/DisplayUsers.jsx';
import Home from './assets/Components/Home.jsx';
import SignIn from './assets/Components/SignIn.jsx';
import SignUp from './assets/Components/SignUp.jsx';
import UpdateCofee from './assets/Components/UpdateCofee.jsx';
import PrivateRoute from './Firebase/Routes/PrivateRoute.jsx';
import './index.css';
import AuthProvider from './Provider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
    children:[
      {
        path: "/",
        element: <App></App>,
        loader:()=>fetch('http://localhost:5000/cofees'),
      },
      {
        path:"/addCofee",
        element:<PrivateRoute><AddCofee></AddCofee></PrivateRoute>
      },
      {
        path:"/updateCofee/:id",
        element:<PrivateRoute><UpdateCofee></UpdateCofee></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/cofees/${params.id}`)
      },
      {
        path:"/displayCofee/:id",
        element:<PrivateRoute><DisplayCofee></DisplayCofee></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/cofees/${params.id}`)
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"/signIn",
        element:<SignIn></SignIn>
      },
      {
        path:"/displayUsers",
        element: <DisplayUsers></DisplayUsers>,
        loader:()=>fetch('http://localhost:5000/users'),
      },
   
    ]
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
