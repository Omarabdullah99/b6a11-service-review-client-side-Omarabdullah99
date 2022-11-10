import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    const notify = () =>  toast.success("add service placed", {
        position: toast.POSITION.TOP_CENTER
      });
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const message = form.message.value;

        const order = {
            
            title: title,
            img:image,
            price:price,
            description:message
           
        }
        fetch('http://localhost:4001/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.acknowledged){
                // alert('add service placed')
                notify()
               
                form.reset()
            }
            console.log(data)
        })
        .catch(err => console.error(err))
    } 
    return (
        <div className='mb-20'>
        <form onSubmit={handlePlaceOrder}> 
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name="title" type="text" placeholder="title" className="input input-ghost w-full  input-bordered" />
            <input name="image" type="text" placeholder="input image url" className="input input-ghost w-full  input-bordered" />
            <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" required />
        </div>
        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required /> 

        <input className='btn' type="submit" value="Add Services" />
    </form>
    <ToastContainer />
        </div>
    );
};

export default AddServices;