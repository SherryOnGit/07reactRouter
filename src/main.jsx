import React from 'react'
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
//const router = createBrowserRouter([
//   {
//     path: '/',
//     Element: <Layout/>,
//     children: [
//       {
//         path: "home",
//         element: <Home/>,
//       },
//       {
//         path: "Contact",
//         element: <Contact/>,
//       },
//       {
//         path : "About",
//         element: <About/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='Contact' element={<Contact />}/>
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
 