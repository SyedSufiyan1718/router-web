import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import About from "./Components/About/About";
import Generate from "./Components/Generate/Generate";
import Colorcode from "./Components/Color-code/Color-code";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="generate" element={<Generate />} />
        <Route path="generate/:id" element={<Colorcode />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
