
import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services=useLoaderData()
    console.log(services)

    // const [services,setServices]=useState([]);
    // useEffect(() => {
    //  fetch('http://localhost:4001/services')
    //  .then(res => res.json())
    //  .then(data => setServices(data))

    // }, [])
    // console.log(services)
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-4/5 mx-auto my-10'>
            {
                services?.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
        </div>
    );
};

export default Services;