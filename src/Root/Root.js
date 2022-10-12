import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../componant/Blog';
import Errorpage from '../componant/Errorpage/Errorpage';
import Home from '../componant/Home';
import Layout from '../componant/Layout';
import Quiz from '../componant/Quiz';
import Statistics from '../componant/Statistics';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/', loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }, element: <Home></Home>
            },
            {
                path: '/home', loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }, element: <Home></Home>
            },
            {
                path: '/subject/:id',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quiz></Quiz>,
            },
            {
                path: '/statistics', loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }, element: <Statistics></Statistics>
            },
            { path: '/blog', element: <Blog></Blog> }
        ]
    }
])
