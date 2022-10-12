import React, { useState } from 'react';
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
                <div className='bg-orange-700 p-2 sticky top-0 left-0 my-2 mx-2 text-white rounded'>
                    <h1>Quiz Ordinary: </h1>
                    <h3>Total Quizes:{singleQuiz.length}</h3>
                    <p>Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.</p>
                </div>
            </div>
        </div>
    );
};

export default Quiz;