import React from 'react';
import { Radar } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const RadarChart = () => {
  const data = {
    labels: ['Attack', 'Defense', 'Possession', 'Passing', 'Shots on Target', 'Fouls', 'Yellow Cards'],
    datasets: [
      {
        label: 'Manchester United',
        data: [85, 70, 60, 80, 80, 60, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Manchester City',
        data: [90, 75, 65, 85, 60, 70, 35],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  };

  return (
    <>
      <Radar data={data} options={options} />
    </>
  );
};

export default RadarChart;