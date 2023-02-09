function Clicks({ clicks, handleClick }: any) {
  return (
    <div className=" py-5">
      <h2 className="text-3xl mt-3">Total Clicks: {clicks}</h2>
      <button
        onClick={handleClick}
        className=" bg-green-900 px-5 py-2 rounded mt-5"
      >
        Click Me !{" "}
      </button>
    </div>
  );
}

export default Clicks;
