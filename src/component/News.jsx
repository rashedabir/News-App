import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News() {
  const { data } = useContext(NewsContext);

  return <div className="news container-lg">
  {
      data.length != 0 ? data.articles.map((news) => <NewsArticle data={news} key={news.url} /> ) : "Loading..."
  }
  </div>;
}

export default News;
