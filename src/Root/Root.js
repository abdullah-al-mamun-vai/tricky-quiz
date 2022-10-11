import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../componant/Home';
import Layout from '../componant/Layout';
export const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>, children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/home', loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }, element: <Home></Home>
            }
        ]
    }
])
