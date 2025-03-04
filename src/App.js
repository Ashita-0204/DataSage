import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./styles.css";

function App() {
  const [results, setResults] = useState(null);

  const fetchResults = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?q=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching results:", error);
      alert(
        "An error occurred while fetching the results. Please try again later."
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar fetchResults={fetchResults} />
      {results && <SearchResults results={results} />}
    </div>
  );
}

export default App;
