import React from 'react';

const AllReview = ({userdata}) => {
    console.log(userdata)
    return (
        <div>
            <h1>Reviwe Item {userdata.serviceName}</h1>
            <img src={userdata.ReviewrImage} alt="" />
            <h1>Client Name:{userdata.ReviwerName}</h1>
            <h1 className='text-xl font-bold'>Review Food:{userdata.message}</h1>
        </div>
    );
};

export default AllReview;