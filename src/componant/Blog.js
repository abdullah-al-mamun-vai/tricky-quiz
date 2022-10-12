import React from 'react';
const first = 4;
const Blog = () => {
    return (
        // <div className='container mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-3 mt-10 border'>
        //     <div className='shadow-lg text-white shadow-slate-400 p-4 mt-4 border bg-gray-800 '>
        //         <h2 className='font-bold text-2xl capitalize '>what is purpose to use router in react</h2>
        //         <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
        //     </div>
        //     <div className='shadow-lg shadow-slate-400 p-4 mt-4 border'>
        //         <h2 className='font-bold text-2xl capitalize '>what is purpose to use router in react</h2>
        //         <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
        //     </div>
        //     <div className='shadow-lg shadow-slate-400 p-4 mt-4 border'>
        //         <h2 className='font-bold text-2xl capitalize '>what is purpose to use router in react</h2>
        //         <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
        //     </div>
        // </div>
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
                            18 Mar 2020
                        </p>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-white text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    Mascarpone cheese triangles taleggio
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-white md:text-lg">
                            Brie cheese triangles cheesecake. Cauliflower cheese cheese and
                            wine manchego bocconcini croque monsieur queso airedale brie.
                        </p>

                    </div>
                    <div className='border border-orange-700 p-1 bg-gray-900 rounded '>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            18 Mar 2020
                        </p>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-white text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    The quick, brown fox jumps over a lazy dog
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-white md:text-lg">
                            "A kitten, a nice little, sleek playful kitten, that I can play
                            with, and teach, and feed--and feed--and feed!" I was not
                            unprepared for this request, for I had noticed how his pets went
                            on increasing in size.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;