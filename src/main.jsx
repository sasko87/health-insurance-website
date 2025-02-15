import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Questions from "./pages/Questions.jsx";
import Contact from "./pages/Contact.jsx";
import Damage from "./pages/Damage.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./components/BlogPost/BlogPost.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "prasanja",
        element: <Questions />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
      },
      {
        path: "/prijavi-steta",
        element: <Damage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post/:id",
        element: <BlogPost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
