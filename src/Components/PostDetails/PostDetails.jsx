import React from 'react';
import './PostDetails.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData()
    const {id,title,body,userId} = postDetails

    const navigate =useNavigate()

    const goBack =()=>{
        navigate(-1)
    }
   

    
    return (
        <div className='post-details'>
            <h1>this is post details</h1>
            <h3>Id : {id}</h3>
            <h3>User id: {userId}</h3>
            <h4>Tittle : {title}</h4>
            <p>Details : {body}</p>
            <button onClick={goBack}>Go-back</button>
        </div>
    );
};

export default PostDetails;