import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root.jsx'
import Details from './Components/Details.jsx'
import Gadget from './Components/Gadget.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Statistics from './Components/Statistics.jsx'
import Error from './Components/Error.jsx'
import About from './Components/About.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    loader:()=>fetch(`tech.json`),
    errorElement:<Error></Error>,
    children:[{

       path:'/',
       element:<Gadget></Gadget>,
       loader:()=>fetch(`tech.json`)
    },{
      path:'about',
      element:<About></About>
    },
      {
        path:'products/:product_id',
        element:<Details></Details>,
        loader:()=>fetch(`tech.json`)
      }
      ,{
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        loader:()=>fetch(`tech.json`)
      },{
        path:'statistics',
        element:<Statistics></Statistics>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
