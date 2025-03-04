import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import "../styles/Home.css"; // Page-specific styles

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setQuery(query);
    fetchResults(query);
  };

  const fetchResults = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?q=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div className="home">
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      {query && <ResultList results={results} />}
    </div>
  );
};

export default Home;
