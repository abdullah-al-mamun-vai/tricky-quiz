import React from 'react';
const Blog = () => {
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2 border border-orange-700 p-1 bg-gray-900 rounded ">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        18 Mar 2020
                    </p>
                    <div className="mb-3">
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            <p className="font-sans text-white text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                                what is purpose to use router in react
                            </p>
                        </a>
                    </div>
                    <p className="mb-4 text-base text-white md:text-lg">
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </p>

                </div>
                <div className="flex flex-col space-y-8 lg:col-span-3">
                    <div className='border border-orange-700 p-1 bg-gray-900 rounded '>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            10 Dec 2022
                        </p>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-white text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    what is useref in react
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-white md:text-lg">
                            Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div ref=myRef  , React will set its .current property to the corresponding DOM node whenever that node changes.
                        </p>

                    </div>
                    <div className='border border-orange-700 p-1 bg-gray-900 rounded '>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            10 Dec 2022
                        </p>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-white text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    why we use context api in react
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-white md:text-lg">
                            ontext is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;