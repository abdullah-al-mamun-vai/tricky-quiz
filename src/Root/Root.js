import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../componant/Errorpage/Errorpage';
import Home from '../componant/Home';
import Layout from '../componant/Layout';
import Quiz from '../componant/Quiz';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/home', loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }, element: <Home></Home>
            },
            {
                path: 'home/subject/:id',
                loader: ({ params }) => {
                    return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quiz></Quiz>,
            }
        ]
    }
])
