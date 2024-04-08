import React from 'react';
import { Line } from 'react-chartjs-2';

const TimelineGraph = () => {
  // Generate labels for the timeline from April 2023 to April 2024
  const labels = [];
  for (let month = 4; month <= 15; month++) { // Loop from April 2023 (month 4) to April 2024 (month 15)
    const year = Math.floor(month / 12) + 2023;
    const monthInYear = month % 12 || 12;
    labels.push(`${monthInYear < 10 ? '0' + monthInYear : monthInYear}/${year}`);
  }

  // Generate data for phone releases (phones sold on the 5th, 20th, etc.)
  const releaseData = [];
  for (let i = 0; i < labels.length; i++) {
    releaseData.push(labels[i].split('/')[0]); // Extract the day from the label
  }

  // Dataset for phone releases with updated colors
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Phone Releases',
        data: releaseData,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red with opacity
        borderColor: 'rgb(255, 99, 132)', // Red
        tension: 0.5 // This adds some "curve" to the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Phone Releases Timeline',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Timeline',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          stepSize: 1, // Set step size to 1 to display every date
        },
      },
    },
    layout: {
      padding: {
        top: 0, // Adjust top padding as needed to make the chart bigger
        bottom: 0, // Adjust bottom padding as needed to make the chart bigger
      }
    },
  };


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%',}}>
      <Line options={options} data={data} />
    </div>
  );
};

export default TimelineGraph;
