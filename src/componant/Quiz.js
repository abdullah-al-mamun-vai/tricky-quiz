import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loadquiz from './Loadquiz';

const Quiz = () => {
    const ourQuiz = useLoaderData();
    const singleQuiz = ourQuiz.data.questions;
    return (
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-1">
            <div className='lg:col-span-2'>
                <h3 className='text-center p-2 font-bold text-2xl my-2 rounded-lg bg-orange-700 text-white capitalize'>quiz of {ourQuiz.data.name}</h3>
                {
                    singleQuiz.map(single => <Loadquiz single={single} key={single.id}> </Loadquiz>)
                }
            </div>
            <div>
                <div className='bg-slate-300 sticky top-0 left-0 mt-8'>
                    <h3>two</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis repellendus dolorum, facilis totam unde autem tenetur minima possimus exercitationem dolores ea! Ducimus ea sequi vero perferendis id a vel.</p>
                </div>
            </div>
        </div>
    );
};

export default Quiz;