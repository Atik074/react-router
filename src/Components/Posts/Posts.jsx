import React from 'react';
import './Posts.css'
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts =useLoaderData()
  

    return (
        <div>
            <h1>All posts length are :{posts.length}</h1>
            <div className='posts'>
                {
                    posts.map(post => <Post
                    key={post.id}
                    post = {post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;