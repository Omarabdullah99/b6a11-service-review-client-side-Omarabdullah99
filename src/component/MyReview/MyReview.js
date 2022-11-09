import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyreviewCart from './MyreviewCart';

const MyReview = () => {
    const {user}=useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:4001/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])
    // console.log(reviews);
    const handleDelet= id => {
        const proceed= window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`http://localhost:4001/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining= reviews.filter(odr => odr._id !== id)
                    setReviews(remaining)
                }
            })

        }
    }
    return (
        <div className='w-4/5 mx-auto'> 
           <h1 className='text-3xl font-bold'>You have added {reviews.length} review</h1>
           <div>
           {
            reviews.length && reviews.map(review=> <MyreviewCart key={review._id} review={review} handleDelet={handleDelet}></MyreviewCart>)
           }
           </div>
           
        </div>
    );
};

export default MyReview;