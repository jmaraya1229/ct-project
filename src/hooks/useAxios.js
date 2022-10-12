import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://quizapi.io";

// Makes HTTPS requests from the browser; makes requests to quizapi.io 
const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
        await axios
          .get(url)
          .then((res) => setResponse(res.data))
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;