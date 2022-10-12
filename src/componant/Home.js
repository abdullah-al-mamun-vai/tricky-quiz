import React from 'react';
import Lottie from "lottie-react";
import { useLoaderData } from 'react-router-dom';
import headerImg from "./img/headerImg.json";
import Subject from './Subject';

const Home = () => {
  const subject = useLoaderData();
  return (
    <div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                A good general knowledge
                <br className="hidden md:block" />
                quiz has a lot to offer. They’re fun, keep your brain {' '}
                <span className="inline-block text-deep-purple-accent-400">
                  sharp and best of all, they suit any occasion.
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                we recognise the universal power of trivia. We’ve even made it our mission to get as many people quizzing as we possibly can. That’s why we’ve compiled 50 of the best general knowledge quiz questions and answers for you to answer yourself or play with others.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-slate-700 hover:bg-slate-600 focus:shadow-outline focus:outline-none"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <Lottie animationData={headerImg} loop={true} />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-10 container mx-auto mt-32'>
        {
          subject.data.map(sub => <Subject subjects={sub} key={sub.id}></Subject>)
        }
      </div>



    </div>
  );
};

export default Home;