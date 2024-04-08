// import axios from 'axios';
// import React, { useState, useEffect, useMemo } from 'react';
// import { Radar } from 'react-chartjs-2';

// const RadarChart = ({ samsungData, xiaomiData }) => {
//   // Calculate the maximum value for each category across all datasets
//   const maxValues = samsungData.map((value, index) => Math.max(value, xiaomiData[index]));

//   // Normalize the data for all datasets based on the maximum value
//   const normalizedSamsungData = samsungData.map((value, index) => (value / maxValues[index]) * 100);
//   const normalizedXiaomiData = xiaomiData.map((value, index) => (value / maxValues[index]) * 100);

//   // Rearrange the normalized data so that each category appears at the last point
//   const rearrangedSamsungData = [...normalizedSamsungData.slice(1), normalizedSamsungData[0]];
//   const rearrangedXiaomiData = [...normalizedXiaomiData.slice(1), normalizedXiaomiData[0]];

//   const data = {
//     labels: ['Storage', 'Camera', 'Battery', 'Display', 'RAM'],
//     datasets: [
//       {
//         label: 'Samsung',
//         data: rearrangedSamsungData,
//         backgroundColor: 'rgba(255, 159, 64, 0.2)', // Change to a more appealing color
//         borderColor: 'rgba(255, 159, 64, 1)', // Change to a more appealing color
//         pointRadius: 0, // Remove the markers
//       },
//       {
//         label: 'Xiaomi',
//         data: rearrangedXiaomiData,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)', // Change to a more appealing color
//         borderColor: 'rgba(75, 192, 192, 1)', // Change to a more appealing color
//         pointRadius: 0, // Remove the markers
//       }
//     ],
//   };

//   const options = {
//     scales: {
//       r: {
//         grid: {
//           display: true, // Show gridlines
//           color: 'rgba(255, 255, 255, 0.2)' // Set gridline color to white
//         },
//         ticks: {
//           display: false, // Hide ticks
//           stepSize: 10 // Set the step size to 10
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top', // Position the legend on top of the chart
//         labels: {
//           color: 'white', // Change label color to white
//           font: {
//             size: 16 // Increase font size of legend labels
//           }
//         },
//       },
//       tooltip: {
//         enabled: true // Enable tooltips
//       }
//     }
//   };

//   return (
//     <div className='radarChartContainer' style={{ width: '100%', height: '90%' }}> {/* Adjust width and height as per your requirement */}
//       <Radar data={data} options={options} />
//     </div>
//   );
// };

// const Test = () => {
//   const [samsungS24Data, setSamsungS24Data] = useState(null);
//   const [XiaomiMi13Data, setXiaomiMi13Data] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const samsungS24Response = await axios.get('https://api.techspecs.io/v4/product/detail', {
//           params: { productId: '65ed932673ea121a292cc8b5' },
//           headers: {
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QWVJ0UTRpRHVsMEhKRyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1NNWc2RmVvbyIsImlhdCI6MTcwNzgyNjkzNH0.0vUGAG4qreqbFV_7t78NKHa67fmChm5I_CswIA1fJg0'
//           }
//         });
//         setSamsungS24Data(samsungS24Response.data.data.items);

//         const otherPhoneResponse = await axios.get('https://api.techspecs.io/v4/product/detail', {
//           params: { productId: '654cbc234396cdca0cdc0919' },
//           headers: {
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QWVJ0UTRpRHVsMEhKRyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1NNWc2RmVvbyIsImlhdCI6MTcwNzgyNjkzNH0.0vUGAG4qreqbFV_7t78NKHa67fmChm5I_CswIA1fJg0'
//           }
//         });
//         setXiaomiMi13Data(otherPhoneResponse.data.data.items);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (!samsungS24Data || !XiaomiMi13Data) {
//       fetchData();
//     }
//   }, [samsungS24Data, XiaomiMi13Data]);

//   // Extract necessary data from the API responses and pass it to RadarChart component
//   const samsungData = useMemo(() => {
//     if (samsungS24Data) {
//       const samsungS24 = samsungS24Data.find(item => item.product.brand === 'Samsung' && item.product.model === 'Samsung Galaxy S24 5G');
//       if (samsungS24) {
//         return [
//           parseFloat(samsungS24.key_aspects.storage).toFixed(2),
//           parseFloat(samsungS24.camera.back_camera.resolution).toFixed(2),
//           parseFloat(samsungS24.inside.battery.capacity).toFixed(2),
//           parseFloat(samsungS24.display.diagonal.split(' ')[0]).toFixed(2),
//           parseFloat(samsungS24.key_aspects.ram).toFixed(2)
//         ];
//       }
//     }
//     return [];
//   }, [samsungS24Data]);

//   const xiaomiData = useMemo(() => {
//     if (XiaomiMi13Data) {
//       const XiaomiMi13 = XiaomiMi13Data.find(item => item.product.brand === 'Xiaomi' && item.product.model === 'Xiaomi Mi 13 Ultra 5G');
//       if (XiaomiMi13) {
//         return [
//           parseFloat(XiaomiMi13.key_aspects.storage).toFixed(2),
//           parseFloat(XiaomiMi13.camera.back_camera.resolution).toFixed(2),
//           parseFloat(XiaomiMi13.inside.battery.capacity).toFixed(2),
//           parseFloat(XiaomiMi13.display.diagonal.split(' ')[0]).toFixed(2),
//           parseFloat(XiaomiMi13.key_aspects.ram).toFixed(2)
//         ];
//       }
//     }
//     return [];
//   }, [XiaomiMi13Data]);

//   return (
//     <RadarChart samsungData={samsungData} xiaomiData={xiaomiData} />
//   );
// };

// export default Test;
