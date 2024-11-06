import React, { useEffect } from 'react';

const About = () => {
    useEffect(()=>{
        document.title="About-Gadget Heaven";
        
    },[])
    return (
        <div className='border-2 mx-auto p-7 m-6'>
            <h1 className='text-4xl font-semibold mb-3'>Gadget Heaven Bd</h1>
            <div className='mt-8'>
            <h3 className='font-bold text-xl mb-1'>About Gadget Heaven Bd</h3>
            <p className='text-lg text-gray-400'> Gadget Heaven Bd has been founded on 1 March 2007. From then to now, Star Tech has won the hearts of many people and now is a country-wide renowned brand. That has been possible due to the hard work Star Tech has done to satisfy its customers. Having the aim to satisfy customers, providing customers with their required products, and being true to their motto, “Customers Come First,” has brought Star Tech to the top choice for E-Commerce Sites in Bangladesh and is recognized as the largest Computer and Tech retailer. Star Tech has over 700 employees and is growing more and more, working diligently to fulfill the Main Criteria of Star Tech’s Motto or Vision. Star Tech is located in 7 Central territories in Dhaka, Gazipur, Chattogram, Khulna, Rajshahi, Mymensingh, and Rangpur. Star Tech has a total of 20 Physical outlets all over the country; selling genuine Tech products. Among them, 13 outlets are in Dhaka as it’s the capital city. Star Tech also has two branches in Chittagong; the commercial capital of Bangladesh. There is one Branch in Gazipur, one in Khulna, one in Rajshahi, one in Mymensingh, and one Branch in Rangpur. Apart from the Physical Branches, We also have our successful E-Commerce website.</p>
            </div>
           
   <div className='mt-5'>
   <h2 className='font-bold text-xl mb-1'>ISO Certified Quality Management System</h2>
   <p className='text-lg text-gray-400'>
   Gadget Heaven Bd has always managed the standards for Quality management. In 2022, Star Tech Ltd. was certified with the well-known "ISO 9001:2015 certification". This marked a groundbreaking achievement for us. As an "ISO 9001:2015 certified" organization; we consistently maintain all sorts of regulatory requirements to provide the best products and services to meet any customer requirement.</p>
   </div>
   
  
   <div className='mt-5'>
  <h2 className='font-bold text-xl mb-1'> The Main Goal and Aim
  </h2>
  <p className='text-lg text-gray-400'> We are Star Tech, and we are here to help you with all your technology needs. We aim to provide all the requirements of our customers and help them satisfy their needs, wants, and desires. We delight in seeing our customers happy and satisfied with our resiliency in providing them with their products. Our complete focus is on the customers. We keep tabs and records on what our customers want, and we try our best to bring that to them. We are already providing our customers with a delivery system so that they can order online and receive their products from their area. They do not have to travel long distances to get their desired product.</p>
  
   </div>
   <div className='mt-5'>
    <h1 className='font-bold text-xl mb-1'> Customer Satisfaction</h1>
  <p className='text-lg text-gray-400'>We have been in the market for a long time, and we have come to know what the customers want and desire. We have made changes around our customers so that we will be able to fulfill the desires of each of our customers. We want to improve more and more to be able to give everyone their desired or dreamed products. We are providing online buying opportunities for our customers, and providing delivery service for all of our products all over Bangladesh. We provide the best after-sales customer service to our customers to make them feel that we do care about their possessions and provide them with the best solutions for their problems.</p>
   
   </div>
        </div>
    );
};

export default About;