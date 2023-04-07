import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate()
    const getNavigate =()=>{
        navigate(`/post/${id}`)
    }
  
    const {id, title} =post
    
    return (
        <div className='post'>
            <h3>Id : {id}</h3>
            <h4>title : {title}</h4>
            <Link to ={`/post/${id}`}>show-details</Link>
            <Link to ={`/post/${id}`}><button>Show-more</button></Link>
            <button onClick={getNavigate}>Click-details</button>
         
            
        </div>
    );
};

export default Post;