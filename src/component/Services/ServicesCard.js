import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    console.log(service)
    const{description,img,price,title,_id}=service
    
    return (
        <div className='border p-10'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <img src={img} alt="" className='w-64 rounded-lg my-3' />
            <p className='font-bold text-xl'>{price} </p>
            <p className='leading-7 text-justify'>{description.slice(0,100)}........... </p>
            <Link to={`/services/${_id}`}>
            <button className="btn btn-outline btn-primary mt-5">Details</button>
            </Link>
        </div>
    );
};

export default ServicesCard;