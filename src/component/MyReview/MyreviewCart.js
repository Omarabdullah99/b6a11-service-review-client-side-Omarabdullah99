import React from 'react';
import { Link } from 'react-router-dom';

const MyreviewCart = ({review,handleDelet}) => {
    console.log(review)
    return (
        <div className=' my-10'>
            
            <div className="review-details  ">
            <img src={review.ReviewrImage} alt="" className='w-32' />
            <h1 className='text-xl font-bold my-[1rem]' >Reviewer Name:{review.ReviwerName}</h1>
            </div>
            <h1 className='text-lg text-start '>Reviwe Item:{review.serviceName}</h1>
            <h1 className='text-xl font-extrabold text-start my-2'>Client Review:{review.message}</h1>
            
            <div className="button flex gap-2 ">
            <Link to={`/update/${review._id}`}><button className="btn btn-outline btn-success ">Update</button></Link>
            <button onClick={()=> handleDelet(review._id)} className="btn btn-error">Delete</button>
            </div>
            

        </div>
    );
};

export default MyreviewCart;