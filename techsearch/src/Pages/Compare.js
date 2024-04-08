import React, { useState } from 'react';
import '../Components/StyleSheets/Compare.css';
import SearchBox from '../Components/SearchBox';
import S24 from '../Components/StyleSheets/assets/S24.jpeg';
import Apple from '../Components/StyleSheets/assets/Apple.jpeg';


function Compare() {
    const [searchResults1, setSearchResults1] = useState([]);
    const [searchResults2, setSearchResults2] = useState([]);
    const [showResults1, setShowResults1] = useState(false);
    const [showResults2, setShowResults2] = useState(false);

    // Handling search results from SearchBox component
    const handleSearch1 = (results) => {
        setSearchResults1(results);
        setShowResults1(true); // Show results when available
    }

    const handleSearch2 = (results) => {
        setSearchResults2(results);
        setShowResults2(true); // Show results when available
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
                                <div className='SearchResultContainer' style={{ display: showResults1 ? 'block' : 'none' }}>
                                    <ul>
                                        {searchResults1.slice(0, 5).map(result => (
                                            <li key={result.id}>
                                                <div className='imageList'>
                                                    <img src={result.image} alt={result.title} />
                                                </div>
                                                <div>
                                                    Model: {result.model}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="div10"> <img src={S24} alt="S24" style={{ width: '100%', height: '100%',  objectFit: 'cover', borderRadius: '10px'}} /></div>
                            <div className="div11"> <img src={Apple} alt="Apple" style={{ width: '100%', height: '100%',  objectFit: 'cover', borderRadius: '10px'}} /> </div>
                            <div className="div12">
                                <div className='searchBoxContainer'>
                                    <SearchBox onSearch={handleSearch2} className="search-box" />
                                </div>
                            </div>
                            <div className="div13">
                                <div className='SearchResultContainer' style={{ display: showResults2 ? 'block' : 'none' }}>
                                    {searchResults2.slice(0, 5).map(result => (
                                        <li key={result.id}>
                                            <div className='imageList'>
                                                <img src={result.image} alt={result.title} />
                                            </div>
                                            <div>
                                                ID: {result.id}
                                                Model: {result.model}
                                            </div>
                                        </li>
                                    ))}
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
