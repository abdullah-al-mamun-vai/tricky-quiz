import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col items-center min-h-screen justify-center'>
            <h1 className='lg:text-4xl sm:text-2xl md:text-3xl font-bold capitalize'>OOPS,Data Not found</h1>
            <p>status: {error.status ? error.status : 'try again'}</p>
            <p> {error.statusText ? error.statusText : 'try again'}</p>
        </div>
    );
};

export default Errorpage;