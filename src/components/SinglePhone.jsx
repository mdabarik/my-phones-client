import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SinglePhone = () => {
    const phone = useLoaderData()
    return (
        <div>
            <h1>{phone.name}</h1>
            <Link to={`/phone/${phone.id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default SinglePhone;