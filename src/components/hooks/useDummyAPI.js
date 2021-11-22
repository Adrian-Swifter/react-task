import { useState, useEffect } from "react";

const useDummyAPI = (baseUrl, id, ext, method) => {
  const [data, setData] = useState([]);
  const separator = id !== "" ? "/" : "";
  useEffect(() => {
    fetch(`${baseUrl}${separator}${id}${separator}${ext}`, {
      method: method,
      // For production I would probably try to hide this ID
      headers: {
        "app-id": "61942b303923f1ec0255c886",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res.data ? setData(res.data) : setData(res);
      })
      //Here I could push error to state and use that to conditionaly render custom error component
      .catch((e) => {
        console.log(e);
      });
  }, [baseUrl, id, ext, method, separator]);

  return data;
};

export default useDummyAPI;
