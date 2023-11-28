import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import CreateAd from './routes/CreateAd.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyProfile from './routes/companyProfile.jsx';
import CandidateProfile from './routes/candidateProfile.jsx';
import CreateProfile from './routes/createProfile.jsx';
import CreateCompanyProfile from './routes/CreateCompanyProfile.jsx';

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "create-ad",
        element: <CreateAd/>,
      },
      {
        path: "/company-profile",
        element: <CompanyProfile/>,
      },
      {
        path: "/candidate-profile",
        element: <CandidateProfile/>,
      },
      {
        path: "/create-profile",
        element: <CreateProfile/>,
      },
      {
        path: "/create-company-profile",
        element: <CreateCompanyProfile/>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
