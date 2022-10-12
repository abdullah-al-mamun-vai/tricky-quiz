import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Loadquiz = ({ single }) => {
    // console.log(single)
    const { question, options, id, correctAnswer } = single;
    const handleAns = (data) => {
        console.log(2)
    }
    const [count, setCount] = useState('0');
    if (count === single.correctAnswer) {
        alert('right')
    }
    return (
        <div className='col-span-2 w-9/12 mx-auto rounded-lg p-4 my-3 bg-slate-400'>
            <div className='flex justify-between'>
                <h2 className='capitalize font-bold text-lg'>{question}</h2>
                <p className='cursor-pointer'><FontAwesomeIcon icon={faCoffee} /></p>
            </div>
            <div className='flex flex-col'>
                {
                    options.map(option => <button onClick={() => setCount(option)} className={`w-9/12 mx-auto capitalize font-semibold py-2 rounded-lg bg-green-500 my-2 ${option === correctAnswer ? ' focus:bg-zinc-900' : 'focus:bg-red-600'}`}>{option}</button>)
                }
            </div>
        </div >
    );
};

export default Loadquiz;


{/* <div>
<input type="radio" name="select_one" id="first" />
<label htmlFor="first">{options[0]}</label>
</div>
<div>
<input type="radio" name="select_one" id="second" />
<label htmlFor="second">{options[1]}</label>
</div>
<div>
<input type="radio" name="select_one" id="third" />
<label htmlFor="third">{options[2]}</label>
</div>
<div>
<input type="radio" name="select_one" id="fourth" />
<label htmlFor="fourth">{options[3]}</label> */}
// </div >