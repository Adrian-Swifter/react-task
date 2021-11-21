import { useState, useEffect } from "react";

const useDummyAPI = (baseUrl, id, ext, method) => {
  const [data, setData] = useState([]);
  const separator = id !== "" ? "/" : "";
  useEffect(() => {
    fetch(`${baseUrl}/post/${id}${separator}${ext}`, {
      method: method,
      headers: {
        "app-id": "61942b303923f1ec0255c886",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res.data ? setData(res.data) : setData(res);
      });
  }, [baseUrl, id, ext, method]);

  return data;
};

export default useDummyAPI;
