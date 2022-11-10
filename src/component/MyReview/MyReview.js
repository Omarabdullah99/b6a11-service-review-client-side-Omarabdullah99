import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyreviewCart from './MyreviewCart';

const MyReview = () => {
    const {user,logOut}=useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:4001/reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('CookingToken')}`
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
                logOut()
            }
            return res.json()
        })
        .then(data => setReviews(data))
    },[user?.email,logOut])
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
           {
            reviews.length ? <h1>You have {reviews.length}</h1> : <p>No Revews were added</p>
           }
           <div>
           {
            reviews?.length && reviews.map(review=> <MyreviewCart key={review._id} review={review} handleDelet={handleDelet}></MyreviewCart>)
           }
           </div>
           
        </div>
    );
};

export default MyReview;