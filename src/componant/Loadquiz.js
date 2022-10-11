import React, { useState } from 'react';

const Loadquiz = ({ single }) => {
    // console.log(single)
    const { question, options, id } = single;
    const [count, setCount] = useState(0);
    return (
        <div className='col-span-2 my-3 bg-slate-400'>
            <div>
                {question}
            </div>

            {
                options.map(single => <label className='block bg-green-500 my-2' htmlFor=''><input type="radio" name={id} id={id} />{single}</label>)
            }
        </div>
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