import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loadquiz from './Loadquiz';

const Quiz = () => {
    const ourQuiz = useLoaderData();
    const singleQuiz = ourQuiz.data.questions
    return (
        <div className="container mx-auto grid grid-cols-3">
            {
                singleQuiz.map(single=><Loadquiz single={single} key={single.id}> </Loadquiz>)
            }
            <div> <h3>two</h3></div>
        </div>
    );
};

export default Quiz;