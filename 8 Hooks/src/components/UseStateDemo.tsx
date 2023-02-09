import { useState } from "react";

function UseStateDemo() {
  const [clicks, setClicks] = useState({ click1: 0, click2: 0 });

  const handleClick1 = () => {
    setClicks({ ...clicks, click1: clicks.click1 + 1 });
  };

  const handleClick2 = () => {
    setClicks({ ...clicks, click2: clicks.click2 + 1 });
  };

  return (
    <div className="w-full text-center mt-20 text-white">
      <h1 className="text-5xl underline"> Total Clicks </h1>
      <h2 className="text-3xl mt-3">
        {" "}
        Blue Button: {clicks.click1} <br /> Green Button: {clicks.click2}
      </h2>
      <div>
        <button
          onClick={handleClick1}
          className=" bg-blue-900 px-5 py-2 rounded mt-5 mr-5"
        >
          Click Me{" "}
        </button>
        <button
          onClick={handleClick2}
          className=" bg-green-900 px-5 py-2 rounded mt-5"
        >
          Click Me{" "}
        </button>
      </div>
    </div>
  );
}

export default UseStateDemo;
