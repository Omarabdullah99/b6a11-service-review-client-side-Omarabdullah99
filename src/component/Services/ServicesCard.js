import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// <img src={img} alt="" className='w-64 rounded-lg my-3' />


const ServicesCard = ({service}) => {
    console.log(service)
    const{description,img,price,title,_id}=service
    
    return (
        <div className='border p-10'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt=""  className='w-64 rounded-lg '/>
            </PhotoView>
          </PhotoProvider>
            <p className='font-bold text-xl'>{price} </p>
            {description.length > 100 ? (
                <p>
                  {description.slice(0, 100) + "..."}
                  
                </p>
              ) : (
                <p>{description}</p>
              )}
            <Link to={`/services/${_id}`}>
            <button className="btn btn-outline btn-primary mt-5">Details</button>
            </Link>
        </div>
    );
};

export default ServicesCard;