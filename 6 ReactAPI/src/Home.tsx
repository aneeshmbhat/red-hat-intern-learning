import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
  search: string;
  setSearch(search: string): void;
}

function Home({ search, setSearch }: Props) {
  const navigate = useNavigate();
  const submitHandler = (e: any) => {
    e.preventDefault();
    navigate(`/advice/${search}`);
  };
  return (
    <>
      <Navbar />
      <form className="mt-96" onSubmit={submitHandler}>
        <input
          className="bg-gray-900 text-white p-1 rounded-l"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
        />
        <button
          className="bg-green-900 rounded-r text-white py-1 px-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default Home;
