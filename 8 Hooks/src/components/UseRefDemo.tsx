import { useRef } from "react";

function UseRefDemo() {
  const textAreaEl = useRef<any>(null);
  const stringVal = useRef("This is a string saved via the ref object --- ");
  const handleBtnClick = () => {
    textAreaEl.current.value =
      stringVal.current +
      "The is the story of your life. You are an human being, and you're on a website about React Hooks";
    textAreaEl.current.focus();
  };

  const handleResetClick = () => {
    textAreaEl.current.value = "";
  };
  return (
    <section className="text-center mt-20 text-white">
      <div className="mb-10">
        <button
          className="bg-blue-900 px-5 py-2 rounded"
          onClick={handleBtnClick}
        >
          Focus and Populate Text Field
        </button>
        <button
          className="bg-red-900 px-5 py-2 rounded ml-5"
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
      <label htmlFor="story">
        Prepare to see text from the ref object here. Click button above.
      </label>
      <textarea
        className="text-black p-5 mt-2 text-center rounded"
        ref={textAreaEl}
        id="story"
        rows={5}
        cols={33}
      />
    </section>
  );
}

export default UseRefDemo;
