import React, { useState } from 'react';
import './StyleSheets/SearchBox.css';
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const options = {
        method: 'POST',
        url: 'https://api.techspecs.io/v4/product/search',
        params: { query },
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QWVJ0UTRpRHVsMEhKRyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1NNWc2RmVvbyIsImlhdCI6MTcwNzgyNjkzNH0.0vUGAG4qreqbFV_7t78NKHa67fmChm5I_CswIA1fJg0'
        }
      };

      const response = await axios.request(options);
      console.log(response.data); // Console log the response data
      
      // Extract the search results from the response
      const searchResultsData = response.data.data;
      setSearchResults(searchResultsData); // Update search results state with the data
      onSearch(searchResultsData); // Pass the data to the parent component
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-box-container">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button"><IoSearchOutline /></button>
      </form>
      
      {/* Display search results */}
      <div>
        <h2>Search Results:</h2>
        <p>Status: {searchResults.status}</p>
        <p>Message: {searchResults.message}</p>
        <p>Total Results: {searchResults.data.total_results}</p>
        {/* Add other properties to display */}
      </div>
    </div>
  );
}

export default SearchBox;