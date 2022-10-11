import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../componant/Home';
import Layout from '../componant/Layout';
export const router = createBrowserRouter([
    { path:'/',element:<Layout></Layout>,children:[
        {path:'/',element:<Home></Home>}
    ]}
])
