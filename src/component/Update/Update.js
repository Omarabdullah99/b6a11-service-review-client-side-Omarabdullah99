import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const data=useLoaderData()
    const notify = () =>  toast.success("update successfull !", {
        position: toast.POSITION.TOP_CENTER
      });
   
    // const Navigate = useNavigate()
    console.log(data)

    const HandelToEditReview = (e) =>{
        e.preventDefault();
        
      const message = e.target.message.value;

      const details = {
        message: message,
      }
      
      
      fetch(`http://localhost:4001/review/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            } ,
            body: JSON.stringify(details),
        })
        .then(res=>res.json())
        .then(data => {if(data.modifiedCount>=0){
            //    alert('succes ful add')
            notify()
           

                // Navigate('/myreview');
            }
            });
            
    }
    
    return (
        <div>
        <form onSubmit={HandelToEditReview}> 
    
        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required /> 
        <input className='btn' type="submit" value="Add update" />

        
    </form>
    <ToastContainer />   
        </div>
    );
};

export default Update;