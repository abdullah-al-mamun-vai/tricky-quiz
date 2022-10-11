import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
    console.log(subject)
    const { name, logo, total, id } = subject;
    console.log(subject)
    return (
        <div className="card w-96 bg-base-700 shadow-xl">
            <figure className="px-10 pt-10">
                <img alt='img' src={logo} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>

                <div className="card-actions justify-evenly w-full">
                    <p className='text-left'>total: {total}</p>
                    <Link to={`/subject/${id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div >
    );
};

export default Subject;