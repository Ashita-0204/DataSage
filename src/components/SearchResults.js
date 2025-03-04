import React, { useState } from "react";
import ResultCard from "./ResultCard";

const SearchResults = ({ results }) => {
  const [sortBy, setSortBy] = useState("title");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortResults = (results) => {
    const allResults = [
      ...results.google.map((item) => ({ ...item, source: "Google" })),
      ...results.youtube.map((item) => ({ ...item, source: "YouTube" })),
      ...results.linkedin.map((item) => ({ ...item, source: "LinkedIn" })),
    ];

    return allResults.sort((a, b) => {
      if (sortBy === "source") {
        return a.source.localeCompare(b.source);
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  return (
    <div className="container mt-4">
      <h3>Search Results</h3>

      <div className="mb-3">
        <select
          className="form-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="title">Sort by Title</option>
          <option value="source">Sort by Source</option>
        </select>
      </div>

      <div className="row">
        {sortResults(results).map((result, index) => (
          <div key={index} className="col-12 col-md-4 mb-4">
            <ResultCard result={result} source={result.source} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
