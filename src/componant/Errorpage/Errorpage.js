import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex items-center min-h-screen justify-center'>
            <h1 className='lg:text-4xl sm:text-2xl md:text-3xl font-bold capitalize'>OOPS,Data Not found</h1>

        </div>
    );
};

export default Errorpage;