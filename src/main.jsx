import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Phones from './components/Phones.jsx';
import Phone from './components/Phone';
import SinglePhone from './components/SinglePhone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: () => fetch("http://localhost:3333/phones")
      },
      {
        path: '/phone/:id',
        element: <SinglePhone></SinglePhone>,
        loader: ({params}) => fetch(`/phone/http://localhost:3333/phones/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
