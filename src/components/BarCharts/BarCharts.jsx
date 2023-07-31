import React from 'react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import { topDealUsers } from '../../data';

const users = [
    {
        id: 1,
        name: "Shahin",
        email: "shs@gmai.com",
        role: "develepr",
    },
    {
        id: 2,
        name: "Shahin",
        email: "shs@gmai.com",
        role: "develepr",
    },
    {
        id: 3,
        name: "Shahin",
        email: "shs@gmai.com",
        role: "develepr",
    },
    {
        id: 4,
        name: "Shahin",
        email: "shs@gmai.com",
        role: "develepr",
    },
];

const BarCharts = () => {
    return (
        <div className='barcharts'>
            <h1>List of Users</h1>
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default BarCharts