import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="article">
      <div className="image">
        <img
          src={data.urlToImage}
          alt={data.title}
          width="379.8px"
          height="250px"
        ></img>
      </div>
      <div className="data-title">
        <a className="title" href={data.url} target="_blank">
          {data.title}
        </a>
      </div>
      <p> {data.description} </p>
      <span className="time"> {data.publishedAt} </span>
    </div>
  );
}

export default NewsArticle;
