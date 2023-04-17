import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Calendario from "./pages/Calendario";
import MisTareas from "./pages/MisTareas";
import React from "react";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/mis-tareas",
        element: <MisTareas></MisTareas>,
      },
      {
        path: "/calendario",
        element: <Calendario></Calendario>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
