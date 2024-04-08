import React, { useState } from 'react';
import './StyleSheets/SearchBox.css';
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('');

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
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QWVJ0UTRpRHVsMEhKRyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1NNWc2RmVvbyIsImlhdCI6MTcwNzgyNjkzNH0.0vUGAG4qreqbFV_7t78NKHa67fmChm5I_CswIA1fJg0'
        }
      };

      const response = await axios.request(options);
      console.log(response.data); // Console log the response data
      
      // Filter out items where thumbnail and large are null
      const filteredItems = response.data.data.items.filter(item => item.image.thumbnail !== null || item.image.large !== null);
      
      // Get first 5 filtered items
      const firstFiveItems = filteredItems.slice(0, 5);
          firstFiveItems.forEach((item, index) => {
      console.log(`Item ${index}:`);
      console.log("Image:", item.image);
      console.log("Product:", item.product);
    });
      // Pass the query and first 5 filtered items to the parent component
      onSearch(query, firstFiveItems);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
}

export default SearchBox;
