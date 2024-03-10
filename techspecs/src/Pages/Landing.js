import React from 'react';
import '../Components/StyleSheets/Landing.css';

function Landing() {
    return ( 
        <div className="landing-container">
            <div className="navbar-spacer"></div> {/* Add a spacer for the navbar */}
            <div className="landing-content">
                <h1>This is Landing Page</h1>
            </div>
        </div>
     );
}

export default Landing;