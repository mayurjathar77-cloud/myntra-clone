import ReactDOM from "react-dom/client";
import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../routes/App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "../routes/Bag.jsx";
import Home from "../routes/Home";
import Wishlist from "../routes/Wishlist.jsx";
import Payment from "../routes/Payment.jsx";
import OrderSuccess from "../routes/OrderSuccess.jsx";
import ProcessingPayment from "../routes/ProcessingPayment.jsx";
import Orders from "../routes/Orders.jsx";
import { Provider } from "react-redux";
import myntraStore from "../store/index.js";
import Profile from "../routes/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", element: <Home /> 
      },
      {
        path: "/bag", element: <Bag/> 
      },
      {
        path: "/wishlist", element: <Wishlist/> 
      },
      {
        path: "/profile", element: <Profile/> 
      },
      {
        path: "/payment", element: <Payment/> 
      },
      {
        path: "/processing-payment", element: <ProcessingPayment/> 
      },
      {
        path: "/order-success", element: <OrderSuccess/> 
      },
      {
        path: "/orders", element: <Orders/> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
