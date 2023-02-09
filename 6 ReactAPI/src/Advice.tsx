import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
  search: string;
}

interface SearchType {
  slips: any[];
  message?: { type: string; text: string };
}

function Advice({ search }: Props) {
  const [data, setData] = useState<SearchType>({ slips: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/search/${search}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();

  const getContent = () => {
    if (loading) return <div></div>;
    if (data.message) {
      navigate("/error");
      return;
    }
    return (
      <div>
        <div className="flex flex-row px-2 mt-1">
          <div className="p-1">Search Topic: {search}</div>
        </div>
        {data.slips.map((item, index) => (
          <div key={index} className="bg-gray-200 p-1 m-1 rounded">
            {item.advice}
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <Navbar />
      {getContent()}
    </>
  );
}

export default Advice;
