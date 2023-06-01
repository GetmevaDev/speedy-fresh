import React from "react";

import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import About from './pages/About';
import Home from "./pages/Home";
import SelfService from "./pages/SelfService";
import WashFold from "./pages/WashFold";
import PickupAndDelivery from "./pages/PickupAndDelivery";
import CommercialLaundry from "./pages/CommercialLaundry";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/404";
import { Provider } from "react-redux";
import store from "./utils/store";
import Accessibility from "./components/Accessibility";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <PageNotFound />,
    children: [
      
      {
        path:"/",
        element: <Home/>
    
      },
      {
        path:"/about",
        element: <About/>
    
      },
      {
        path:"/self-service",
        element: <SelfService />
    
      },
      {
        path:"/wash-fold",
        element: <WashFold />
    
      },
      {
        path:"/pickup-and-delivery",
        element: <PickupAndDelivery />
    
      },
      {
        path:"/commercial-laundry",
        element: <CommercialLaundry />
    
      },
      {
        path:"/pricing",
        element: <Pricing />
    
      },
      {
        path:"/contact",
        element: <ContactUs />
    
      },
    ],
    

  },
  {
    path:"/accessibility-policy-and-commitment-statement",
    element:<Accessibility />
  }
])


const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <RouterProvider router={appRouter}/> </Provider>);

