import React from 'react';
import { useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import Header from './../Header'
const Errorpage = () => {
    const error = useRouteError();
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col items-center min-h-screen justify-center'>
                <div>
                    <p className='text-center text-white text-9xl'><FontAwesomeIcon icon={faSadCry} /></p>
                    <h1 className='lg:text-4xl text-white sm:text-2xl md:text-3xl font-bold capitalize'>OOPS,Data Not found</h1>
                </div>
                <p className='text-white'>Status: {error.status ? error.status : 'try again'}</p>
                <p className='text-white'> {error.statusText ? error.statusText : 'try again'}</p>
            </div>
        </div>
    );
};

export default Errorpage;