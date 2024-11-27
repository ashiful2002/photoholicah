import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Header from "../Layout/Header";
import Hero from "../Sections/Hero";
import Blog from "../pages/Blog";
import Gallery from "../pages/Gallery";


 const  router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  export default router
