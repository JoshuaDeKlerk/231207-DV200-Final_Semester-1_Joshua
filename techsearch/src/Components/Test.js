// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Test() {
//     const [samsungS24Data, setSamsungS24Data] = useState(null);
//     const [XiaomiMi13Data, setXiaomiMi13Data] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const samsungS24Response = await axios.get('https://api.techspecs.io/v4/product/detail', {
//                     params: { productId: '65ed932673ea121a292cc8b5' },
//                     headers: {
//                         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QWVJ0UTRpRHVsMEhKRyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1NNWc2RmVvbyIsImlhdCI6MTcwNzgyNjkzNH0.0vUGAG4qreqbFV_7t78NKHa67fmChm5I_CswIA1fJg0'
//                     }
//                 });
//                 setSamsungS24Data(samsungS24Response.data.data.items);

//                 const otherPhoneResponse = await axios.get('https://api.techspecs.io/v4/product/detail', {
//                     params: { productId: '654cbc234396cdca0cdc0919' }, 
//                     headers: {
//                         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QWVJ0UTRpRHVsMEhKRyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1NNWc2RmVvbyIsImlhdCI6MTcwNzgyNjkzNH0.0vUGAG4qreqbFV_7t78NKHa67fmChm5I_CswIA1fJg0'
//                     }
//                 });
//                 setXiaomiMi13Data(otherPhoneResponse.data.data.items);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         if (!samsungS24Data || !XiaomiMi13Data) {
//             fetchData();
//         }
//     }, [samsungS24Data, XiaomiMi13Data]);

//     useEffect(() => {
//         // Display specific information in the console for Samsung S24
//         if (samsungS24Data) {
//             const samsungS24 = samsungS24Data.find(item => item.product.brand === 'Samsung' && item.product.model === 'Samsung Galaxy S24 5G');
//             if (samsungS24) {
//                 console.log(samsungS24.product.model);
//                 console.log("Camera Resolution:", parseFloat(samsungS24.camera.back_camera.resolution).toFixed(2)); 
//                 console.log("Display Diagonal:", parseFloat(samsungS24.display.diagonal.split(' ')[0]).toFixed(2));
//                 console.log("Battery Capacity:", parseFloat(samsungS24.inside.battery.capacity).toFixed(2));
//                 console.log("RAM:", parseFloat(samsungS24.key_aspects.ram).toFixed(2));
//                 console.log("Storage:", parseFloat(samsungS24.key_aspects.storage).toFixed(2));
//             } else {
//                 console.log("Samsung S24 not found in the product data.");
//             }
//         }

//         // Display specific information in the console for the other phone
//         if (XiaomiMi13Data) {
//             const XiaomiMi13 = XiaomiMi13Data.find(item => item.product.brand === 'Xiaomi' && item.product.model === 'Xiaomi Mi 13 Ultra 5G');
//             if (XiaomiMi13) {
//                 console.log(XiaomiMi13.product.model);
//                 console.log("Camera Resolution:", parseFloat(XiaomiMi13.camera.back_camera.resolution).toFixed(2)); 
//                 console.log("Display Diagonal:", parseFloat(XiaomiMi13.display.diagonal.split(' ')[0]).toFixed(2));
//                 console.log("Battery Capacity:", parseFloat(XiaomiMi13.inside.battery.capacity).toFixed(2));
//                 console.log("RAM:", parseFloat(XiaomiMi13.key_aspects.ram).toFixed(2));
//                 console.log("Storage:", parseFloat(XiaomiMi13.key_aspects.storage).toFixed(2));
//             } else {
//                 console.log("Xiaomi Mi 13 not found in the product data.");
//             }
//         }
//     }, [samsungS24Data, XiaomiMi13Data]);

//     return <div />;
// }

// export default Test;