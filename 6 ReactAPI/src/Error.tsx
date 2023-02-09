import Navbar from "./Navbar";

function Error() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <span className="text-3xl">Error has occured</span> <br />{" "}
        <span>Either query isn't relevant or it's wrongly specified</span>
      </div>
    </>
  );
}

export default Error;
