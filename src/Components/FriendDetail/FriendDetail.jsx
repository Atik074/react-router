import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    console.log(friend)
    return (
        <div>
            <h2>ALL Inform are here in friend detail:</h2>
            <h5>name :{friend.name}</h5>
            <p>phone : {friend.phone}</p>
            <p>email : {friend.email}</p>

        </div>
    );
};

export default FriendDetail;