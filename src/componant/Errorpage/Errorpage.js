import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from './../Header'
const Errorpage = () => {
    const error = useRouteError();
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col items-center min-h-screen justify-center'>
                <h1 className='lg:text-4xl sm:text-2xl md:text-3xl font-bold capitalize'>OOPS,Data Not found</h1>
                <p>status: {error.status ? error.status : 'try again'}</p>
                <p> {error.statusText ? error.statusText : 'try again'}</p>
            </div>
        </div>
    );
};

export default Errorpage;