import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    })
    return (
        <div>
            <h2>Friend Details of Id {friendId}</h2>
            <p>Id : {friend.id}</p>
            <p>Name : {friend.name}</p>
            <p>Email : {friend.email}</p>
        </div>
    );
};

export default FriendDetails;