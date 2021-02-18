import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = "016efbce20fb4e208b00ca29d9662dee";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=tesla&from=2021-01-18&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>
  );
};
