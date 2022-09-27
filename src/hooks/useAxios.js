import axios from "axios";
import { useEffect, useState } from "react";
// import { useLazyAxios } from 'use-axios-client';

// Quizapi.io https://quizapi.io/api/v1/questions?apiKey=lO6AWe9K6faBneDIMSY28g4R5qja5vzsdcX6hwiC&difficulty=Easy&limit=10

// axios.defaults.baseURL = "https://opentdb.com";
axios.defaults.baseURL = "https://quizapi.io";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = () => {
       axios
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