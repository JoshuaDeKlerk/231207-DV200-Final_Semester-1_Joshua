import React from 'react';
import '../Components/StyleSheets/Timeline.css';
import TimelineGraph from '../Components/TimelineGraph';
import Flat from '../Components/StyleSheets/assets/Flat.jpeg';

function Timeline() {
    return ( 
        <div>
            <div className="timeline-container">
            <div className="navbar-spacer"></div>
            <div className="timeline-content">
                <div className="timelineTop">
                    <h1>Timeline</h1>
                    <h1>TechSearch</h1>
                </div>
                <div className="contentContainer1">
                    <div className="parent2">
                        <div class="div14"> <TimelineGraph /></div>
                        <div class="div15"> 
                            
                            <div className='titleTimeline'>
                                <h2>
                                    Timeline Page
                                </h2>
                            </div>
                            <div className='textTimeline'>
                                <p>The timeline page displays a graphical representation of phone releases over a specified period, typically from April 2023 to April 2024. The page features a line chart where the x-axis represents the timeline, spanning from April 2023 to April 2024, and the y-axis represents the dates of the month.</p>
                            </div>
                           
                        </div>
                        <div class="div16">  
                        <img src={Flat} alt="Flat" style={{ width: '100%', height: '100%',  objectFit: 'cover', borderRadius: '10px'}} /> 
                        </div>
                    </div>
                </div>
            </div>
            </div>            
        </div>
     );
}

export default Timeline;