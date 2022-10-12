import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex justify-center h-96 items-center'>
            <h1 >OOPS,Data Not found</h1>

        </div>
    );
};

export default Errorpage;