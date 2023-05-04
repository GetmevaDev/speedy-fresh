import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import About from './pages/About';
import Error from "./components/Error";
import Home from "./pages/Home";
import SelfService from "./pages/SelfService";
import WashFold from "./pages/WashFold";
import PickupAndDelivery from "./pages/PickupAndDelivery";
import CommercialLaundry from "./pages/CommercialLaundry";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error />,
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
    ]

  }
])


const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

