import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/");
  };
  return (
    <div className="p-1 border-b-2 flex flex-row">
      <h1 className="text-3xl text-left">Advicer</h1>
      {window.location.href !== "http://localhost:3000/" && (
        <button
          className="ml-auto bg-red-900 p-1 rounded text-white"
          onClick={buttonHandler}
        >
          Go Back
        </button>
      )}
    </div>
  );
}

export default Navbar;
