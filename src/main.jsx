import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Body from './assets/Compoments/Body'
import Details from "./assets/Compoments/Details";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./DataContext" 


const router = createBrowserRouter([
  
  {
    path: "/Pays",
    element: <Body ></Body>,
    errorElement: Error()
    
  },
  {
    path: "/Details/:id",
    element: <Details />,
    errorElement: Error()
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
