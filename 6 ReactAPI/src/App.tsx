import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import { useState } from "react";
import Advice from "./Advice";
import Error from "./Error";

function App() {
  const [search, setSearch] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home search={search} setSearch={setSearch} />,
    },
    {
      path: `/advice/${search}`,
      element: <Advice search={search} />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);
  return (
    <div className="w-screen h-screen flex">
      <div className="text-lg w-2/3 mt-3 mx-auto text-center">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
