import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import About from './components/Aboutus/About.jsx';
import App from './App.jsx';
import './index.css'
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github, { githubInfo } from './components/Github/Github.jsx';
import User from './components/User/User.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route 
      loader={githubInfo}
      path="/github" 
      element={<Github />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
