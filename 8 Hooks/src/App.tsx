import { useState } from "react";
import UseCallbackDemo from "./components/UseCallbackDemo";
import UseEffectDemo from "./components/UseEffectDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseRefDemo from "./components/UseRefDemo";
import UseStateDemo from "./components/UseStateDemo";

function App() {
  const [comp, setComp] = useState(0);
  const getComponent = () => {
    switch (comp) {
      case 1:
        return <UseStateDemo />;
      case 2:
        return <UseEffectDemo />;
      case 3:
        return <UseCallbackDemo />;
      case 4:
        return <UseMemoDemo />;
      case 5:
        return <UseRefDemo />;
      default:
        return <div></div>;
    }
  };

  const getunderline = (val: number) => {
    if (comp === val) return " underline";
    else return "";
  };

  return (
    <div className="bg-gray-800 w-screen h-screen flex flex-col">
      <div className=" w-full text-white px-10 flex py-5 text-2xl">
        <button
          className={"w-full" + getunderline(1)}
          onClick={() => setComp(1)}
        >
          useState
        </button>
        <button
          className={"w-full" + getunderline(2)}
          onClick={() => setComp(2)}
        >
          useEffect
        </button>
        <button
          className={"w-full" + getunderline(3)}
          onClick={() => setComp(3)}
        >
          useCallback
        </button>
        <button
          className={"w-full" + getunderline(4)}
          onClick={() => setComp(4)}
        >
          useMemo
        </button>
        <button
          className={"w-full" + getunderline(5)}
          onClick={() => setComp(5)}
        >
          useRef
        </button>
      </div>
      <div className="w-full h-full">{getComponent()}</div>
    </div>
  );
}

export default App;
