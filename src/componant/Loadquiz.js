import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
const Loadquiz = ({ single, countMistake, setCountMistake }) => {
    const { question, options, correctAnswer } = single;
    const rightAns = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
    const [count, setCount] = useState([]);
    const handleAns = () => {
        if (correctAnswer) {
            Swal.fire(
                rightAns
            )
        }
    }
    if (count === single.correctAnswer) {
        Swal.fire(
            'Good job!',
            'correct'
        )
    }
    return (
        <div className='lg:w-9/12 md:w-full mx-auto rounded-lg p-4 my-3 bg-zinc-900'>
            <div className='flex justify-between'>
                <h2 className='capitalize font-bold lg:text-lg sm:text-base text-white'>{question}</h2>
                <p onClick={handleAns} className='cursor-pointer text-white'><FontAwesomeIcon icon={faEye} /></p>
            </div>
            <div className='flex flex-col'>
                {
                    options.map(option => <button onClick={() => setCount(option)} className={`w-9/12 mx-auto capitalize font-semibold py-2 hover:shadow-lg hover:shadow-orange-700 rounded-lg text-white border border-orange-700 my-2 ${option === correctAnswer ? ' focus:bg-green-600' : 'focus:bg-red-600'}`}>{option}</button>)
                }
            </div>
        </div >
    );
};

export default Loadquiz;

