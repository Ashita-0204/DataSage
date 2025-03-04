import React from "react";

const ResultCard = ({ result, source }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{result.title}</h5>
        <p className="card-text">{result.description}</p>
        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          View on {source}
        </a>
      </div>
    </div>
  );
};

export default ResultCard;
