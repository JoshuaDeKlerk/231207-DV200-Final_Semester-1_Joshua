import React, { useEffect } from 'react';
import '../Components/StyleSheets/Landing.css';
import RadarChart from '../Components/Radarchart';
import LineChart from '../Components/LineChart';
import BarChart from '../Components/BarChart';
import Test from '../Components/Test';
import axios from 'axios';

function Landing() {
 
    return (
        <div className="landing-container">
            <div className="navbar-spacer"></div>
            <div className="landing-content">
                <div className="dashboardTop">
                    <h1>Dashboard</h1>
                    <h1>TechSearch</h1>
                </div>
                <div className="chartsContainer">
                    <div className="parent">
                        <div className="div1"> </div>
                        <div className="div2"> </div>
                        <div className="div3"> </div>
                        <div className="div4">
                            <div className='titleBoxRadar'>
                                <h1>Samsung vs Xiaomi</h1>
                            </div>
                            <div className='lineContainer'>
                                <div className='lineGap'></div>
                            </div>
                            <div className='radarChartDiv'>
                                {/* <RadarChart /> */}
                            </div>
                        </div>
                        <div className="div5">
                            <div className='smallChartDiv'>
                                <LineChart />
                            </div>
                        </div>
                        <div className="div6"> </div>
                        <div className="div7">
                            <div className='smallChartDiv'>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

// 65ed932673ea121a292cc8b5