import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {

    const {username,id,name,email} = props.friend;
    const navigate = useNavigate();
    const handleClick = (friendId) =>{
        const url = `/Friend/${friendId}`
        navigate(url);
        
    }
    
    return (
        <div className='Friend'>
           <h2>Username : {username}</h2>
           <p>Id : {id} </p>
           <p>Name : {name}</p>
           <p>Email : {email}</p>
           <p> <Link to={`/Friend/${id}`}>Show Detail of {id}</Link> </p>   
           <button onClick={() => handleClick(id) }>Click Details</button>   
        </div>
    );
};

export default Friend;