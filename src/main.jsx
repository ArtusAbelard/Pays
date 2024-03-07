import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Body from './assets/Compoments/Body'


const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Body></Body>
    
  },
  // {
  //   path: "/details/:id",
  //   element: <Details />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
