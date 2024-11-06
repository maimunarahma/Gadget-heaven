import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';

const Statistics = () => {
    const chartData = [
        { name: "iPhone 13 Pro", price: 999, rating: 4.8 },
        { name: "Samsung Galaxy S21", price: 799, rating: 4.7 },
        { name: "Google Pixel 6", price: 599, rating: 4.6 },
        { name: "OnePlus 9", price: 729, rating: 4.5 },
        { name: "Xiaomi Mi 11", price: 699, rating: 4.4 },
        { name: "Sony Xperia 5 II", price: 950, rating: 4.7 },
        { name: "MacBook Pro 14", price: 1999, rating: 4.9 },
        { name: "Dell XPS 13", price: 999, rating: 4.6 },
        { name: "AirPods Pro", price: 249, rating: 4.6 },
        { name: "Logitech MX Master 3", price: 99, rating: 4.9 },
        { name: "Apple Watch Series 7", price: 399, rating: 4.7 },
        { name: "Samsung Galaxy Watch 4", price: 349, rating: 4.5 }
      ];
      useEffect(() => {
        document.title = "Statistics - My React App"; // Set the title for this page
      }, []);
    
    
    return (
        <div  className='mx-auto pt-10'>
            <div className='w-full py-6 bg-[#9538E2] flex flex-col justify-around items-center text-white'>
           <h1 className='text-2xl font-bold'>Statistics</h1>
           <p className='px-24  mt-5 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div style={{  height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    
            </div>
         
        </div>
    );
};

export default Statistics;