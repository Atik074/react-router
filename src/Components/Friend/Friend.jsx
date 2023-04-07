import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,email,phone,id} = friend
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <h5>phone : {phone}</h5>
            <p>
                <Link to={`/friend/${id}`}>show more</Link>
                

            </p>

        </div>
    );
};

export default Friend;