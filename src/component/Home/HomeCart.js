import React from 'react';

import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// <p>{service.description.slice(0,100)}</p>

const HomeCart = ({service}) => {
    return (
       <div>
       
       <div className='border p-10 my-10'>
       <h1 className='text-xl font-bold'>{service.title}</h1>

       <PhotoProvider>
      <PhotoView src={service.img}>
        <img src={service.img} alt="" />
      </PhotoView>
    </PhotoProvider>
      
       {service.description.length > 100 ? (
        <p>
          {service.description.slice(0, 100) + "..."}
          
        </p>
      ) : (
        <p>{service.description}</p>
      )}
       <p className='text-xl font-bold'> Price:{service.price}</p>
       <Link to={`services/${service._id}`}>
       <button className="btn btn-outline btn-primary mt-5">Details</button>
       </Link>
   </div>
       </div>
    );
};

export default HomeCart;