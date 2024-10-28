import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact"
import './App.css'
import About from './Components/About/About'

function App() {
 const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} >
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path=':id' />
        </Route>
    )
)

return (
    <RouterProvider router={router} />
)

}

export default App




