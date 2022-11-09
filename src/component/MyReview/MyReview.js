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
        fetch(`http://localhost:4001/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])
    console.log(reviews);
    return (
        <div>
           <h1>length{reviews.length}</h1>
           <div>
           {
            reviews.length && reviews.map(review=> <MyreviewCart key={review._id} review={review}></MyreviewCart>)
           }
           </div>
           
        </div>
    );
};

export default MyReview;