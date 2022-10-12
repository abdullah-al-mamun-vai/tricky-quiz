import React, { useState } from 'react';

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
        <div className='col-span-2 my-3 bg-slate-400'>
            <div>
                {question}
            </div>
            <div className='flex flex-col'>
                {
                    options.map(option => <button onClick={() => setCount(option)} className={`bg-green-500 my-2 ${option === correctAnswer ? ' focus:bg-zinc-900' : 'focus:bg-red-600'}`}>{option}</button>)
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