import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [clicks, setClicks] = useState(0);
  const memoClicks = useMemo(() => clicks + 29, []);

  return (
    <div className="text-center text-white mt-20">
      <h2 className="text-3xl">Normal State Value: {clicks}</h2>
      <h2 className="text-3xl">Memoized Value: {memoClicks}</h2>
      <button
        className="bg-blue-900 px-5 py-2 rounded mt-5"
        onClick={() => setClicks(clicks + 1)}
      >
        Click Me !
      </button>
    </div>
  );
}

export default UseMemoDemo;
