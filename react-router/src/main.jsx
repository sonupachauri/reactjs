import { StrictMode } from 'react'
import React from "react";
import { createRoot,ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import User from './User/User.jsx';
import Github from './Github/Github.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Contact from './Contact/Contact.jsx';

// const router = createBrowserRouter([
//     {
//       path:'',
//       element:<App />,
//       children:[
//         {
//           path:"",
//           element:<Home />
//         },
//         {
//           path:"about",
//           element:<About />
//         },
//         {
//           path:"contact",
//           element:<Contact />
//         },
//       ]

//     }
// ])


// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <RouterProvider router={router} />
// );

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
           <Route path='' element={<Home />}/>
           <Route path='about' element={<About />}/>
           <Route path='contact' element={<Contact />}/>
           <Route path='user/:userid' element={<User />}/>
           <Route path='github' element={<Github />}/>
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
