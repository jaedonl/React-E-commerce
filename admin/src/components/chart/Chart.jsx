import React from 'react'
import './Chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({title, data, dataKey, grid}) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    { grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 6 }} />
                    {/* <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" activeDot={{ r: 6 }} /> */}
                </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Chart
