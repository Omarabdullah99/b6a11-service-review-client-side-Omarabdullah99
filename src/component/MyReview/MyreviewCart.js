import React from 'react';
import { Link } from 'react-router-dom';

const MyreviewCart = ({review,handleDelet}) => {
    console.log(review)
    return (
        <div className='flex gap-x-10 items-center my-10'>
            <div className="button">
            <button onClick={()=> handleDelet(review._id)} className="btn btn-error">Delete</button>
            </div>
            <div className="review-details flex items-center ">
            <img src={review.ReviewrImage} alt="" className='w-20 rounded-full' />
            <h1>Name:{review.ReviwerName}</h1>
            </div>
            <h1 className='text-lg '>Reviwe Item:{review.serviceName}</h1>
            <h1 className='text-xl font-extrabold'>Client Review:{review.message}</h1>
            <Link to={`/update/${review._id}`}><button className="btn btn-outline btn-success">Update</button></Link>
            

        </div>
    );
};

export default MyreviewCart;