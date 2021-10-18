import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    //get details with id by dynamic routing
    const {id}=useParams();

    return (
        <div>
            <h1>I am details {id}</h1>
        </div>
    );
};

export default Details;