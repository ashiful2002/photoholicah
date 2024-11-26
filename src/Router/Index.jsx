import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Header from "../Layout/Header";
import Hero from "../Sections/Hero";


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
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  export default router
