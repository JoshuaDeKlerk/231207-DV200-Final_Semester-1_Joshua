import React from 'react';
import '../Components/StyleSheets/Landing.css';
import RadarChart from '../Components/Radarchart';

function Landing() {
    return ( 
        <div className="landing-container">
            <div className="navbar-spacer"></div>
            <div className="landing-content">
                <div className="dashboardTop">
                    <h1>Dashboard</h1>
                </div>
                <div className="chartsContainer">
                    <div className="parent">
                        <div className="div1"> </div>
                        <div className="div2"> </div>
                        <div className="div3"> </div>
                        <div className="div4"> <RadarChart /> </div>
                        <div className="div5"> </div>
                        <div className="div6"> </div>
                        <div className="div7"> </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Landing;