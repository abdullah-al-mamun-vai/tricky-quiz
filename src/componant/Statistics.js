import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const chart = data.data;
    console.log(chart)
    return (
        <div className='w-full h-96 container mx-auto '>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={200}
                    height={300}
                    data={chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Statistics;