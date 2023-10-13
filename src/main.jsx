import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Animation from './Components/Animation.jsx'
import Home from './Components/Home.jsx'
import ComputerScience from './Components/ComputerScience.jsx'
import GameDesign from './Components/GameDesign.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/animation',
        element: <Animation/>
      },
      {
        path: '/computer-science',
        element: <ComputerScience/>
      },
      {
        path: '/game-design',
        element: <GameDesign/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
