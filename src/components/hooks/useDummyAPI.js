import { useState, useEffect } from "react";

const useDummyAPI = (baseUrl, id, ext, method) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/post/${id}/${ext}`, {
      method: method,
      headers: {
        "app-id": "61942b303923f1ec0255c886",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res.data ? setData(res.data) : setData(res)
      });
  }, [id]);

  return  data;
};

export default useDummyAPI;
