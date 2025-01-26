import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx"; // Import App from the src root
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx"; // Import About from components folder
import Contact from "./components/Contact.jsx"; // Import Contact from components folderimpo
import Fixtures from "./components/Fixtures.jsx";
import Highlights from "./components/Highlights.jsx";
import Team from "./components/Team.jsx";
import Merch from "./components/Merch.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // App.jsx serves as the layout and home
    children: [
      { path: "/", element: <Home /> }, // Home page
      { path: "/AboutUs", element: <AboutUs /> }, // About page
      { path: "/Contact", element: <Contact /> }, // Contact page
      { path: "/Fixtures", element: <Fixtures /> },
      { path: "/Highlights", element: <Highlights /> },
      { path: "/Team", element: <Team /> },
      { path: "/Merch", element: <Merch /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>       
    <RouterProvider router={router} />
  </StrictMode>
);
