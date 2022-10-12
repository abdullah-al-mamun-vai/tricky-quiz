import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subjects }) => {
    const { name, logo, total, id } = subjects;
    return (
        <div className="card lg:w-full sm:w-5/6 sm:mx-auto bg-gray-900 shadow-xl">
            <figure className="px-10 pt-4 sm:px-0">
                <img className='w-10/12 h-5/6 mx-auto' alt='img' src={logo} />
            </figure>
            <div className="card-body items-center text-center pt-0">
                <h2 className="card-title text-white ">{name}</h2>
                <div className="card-actions justify-evenly w-full">
                    <p className='text-left text-white capitalize font-semibold text-lg'>total: {total}</p>
                    <Link to={`/subject/${id}`} className="btn border border-orange-700 bg-transparent hover:shadow-lg hover:shadow-orange-700">Go to quiz</Link>
                </div>
            </div>
        </div >
    );
};

export default Subject;