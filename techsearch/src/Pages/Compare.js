import React, { useState } from 'react';
import '../Components/StyleSheets/Compare.css';
import SearchBox from '../Components/SearchBox';

function Compare() {
    const [searchResults1, setSearchResults1] = useState([]);
    const [searchResults2, setSearchResults2] = useState([]);
    const [showResults1, setShowResults1] = useState(false);
    const [showResults2, setShowResults2] = useState(false);

    const handleSearch1 = (query) => {
        setSearchResults1([{ id: 1, title: 'Result 1' }, { id: 2, title: 'Result 2' }, { id: 3, title: 'Result 3' }, { id: 4, title: 'Result 4' }, { id: 5, title: 'Result 5' }]);
        setShowResults1(!showResults1);
    }

    const handleSearch2 = (query) => {
        setSearchResults2([{ id: 1, title: 'Result 1' }, { id: 2, title: 'Result 2' }, { id: 3, title: 'Result 3' }, { id: 4, title: 'Result 4' }, { id: 5, title: 'Result 5' }]);
        setShowResults2(!showResults2); // Toggle the search results list
    }
    

    return (
        <div>
            <div className="compare-container">
                <div className="navbar-spacer"></div>
                <div className="compare-content">
                    <div className="compareTop">
                        <h1>Compare</h1>
                        <h1>TechSearch</h1>
                    </div>
                    <div className="contentContainer">
                        <div className="parent1">
                            <div className="div8">
                                <div className='searchBoxContainer'>
                                    <SearchBox onSearch={handleSearch1} className="search-box" />
                                </div>
                            </div>
                            <div className="div9">
                                <div className='SearchResultContainer'>
                                    {showResults1 && (
                                        <ul className="search-results">
                                            {searchResults1.slice(0, 5).map(result => (
                                                <li key={result.id}>
                                                    <div className='imageList'></div>
                                                    {result.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="div10"> </div>
                            <div className="div11"> </div>
                            <div className="div12">
                                <div className='searchBoxContainer'>
                                    <SearchBox onSearch={handleSearch2} className="search-box" />
                                </div>
                            </div>
                            <div className="div13">
                                <div className='SearchResultContainer'>
                                    {showResults2 && (
                                        <ul className="search-results">
                                            {searchResults2.slice(0, 5).map(result => (
                                                <li key={result.id}>
                                                    <div className='imageList'></div>
                                                    {result.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Compare;