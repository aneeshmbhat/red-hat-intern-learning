import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => setClicks(clicks + 1);

  useEffect(() => {
    document.title = "" + clicks + "";
  });

  useEffect(() => {
    const clicked = () => console.log("window clicked " + clicks);
    window.addEventListener("click", clicked);

    return () => {
      console.log("Cleanup " + clicks);
      window.removeEventListener("click", clicked);
    };
  }, [clicks]);

  useEffect(() => {
    console.log("Call me only once");
  }, []);

  return (
    <>
      <div className="text-white w-full text-center mt-20">
        <h2 className="text-3xl">
          Look at the title of the current tab in your browser{" "}
        </h2>
        <button
          className=" bg-blue-900 px-5 py-2 rounded mt-5 mr-5"
          onClick={handleClick}
        >
          Update Title !!!
        </button>
      </div>
      <h2 className="text-white w-full text-center mt-20 text-3xl">
        When you click the window <br /> a message is logged to the console
      </h2>
    </>
  );
}

export default UseEffectDemo;
