import React from 'react';
import '../Components/StyleSheets/Landing.css';

function Landing() {
    return ( 
        <div className="landing-container">
            <div className="navbar-spacer"></div>
            <div className="landing-content">
                <div className="dashboardTop">
                    <h1>Dashboard</h1>
                </div>
                <div className="chartsContainer">
                    <div class="parent">
                        <div class="div1"> </div>
                        <div class="div2"> </div>
                        <div class="div3"> </div>
                        <div class="div4"> </div>
                        <div class="div5"> </div>
                        <div class="div6"> </div>
                        <div class="div7"> </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Landing;