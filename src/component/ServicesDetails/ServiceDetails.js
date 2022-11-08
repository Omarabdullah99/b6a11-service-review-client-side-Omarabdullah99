import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title,_id,img,price,description}=useLoaderData()
    return (
        <div className='w-5/6 mx-auto'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <img src={img} alt="" className='w-80 my-5'/>
            <p className='text-xl font-bold '>{price} </p>
            <p className='my-5 text-justify'>{description} </p>
        </div>
    );
};

export default ServiceDetails;