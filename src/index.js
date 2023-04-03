import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Motivation from "./pages/Motivation/Motivation.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./pages/Home/Home.jsx";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const Layout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "motivation", element: <Motivation /> },
      // { path: "user/:userId", element: <User/> },
      { path: "*", element: <div>404</div>}
    ],
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();