import React from 'react'
import './Chart.scss'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//       name: 'Jan',
//       "Active User": 4000,
//       "Sales Rate": 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Feb',
//       "Active User": 3000,
//       "Sales Rate": 1398,
//       amt: 2210,
//     },
//     {
//       name: 'March',
//       "Active User": 2000,
//       "Sales Rate": 9800,
//       amt: 2290,
//     },
//     {
//       name: 'April',
//       "Active User": 2780,
//       "Sales Rate": 3908,
//       amt: 2000,
//     },
//     {
//       name: 'May',
//       "Active User": 1890,
//       "Sales Rate": 4800,
//       amt: 2181,
//     },
//     {
//       name: 'June',
//       "Active User": 2390,
//       "Sales Rate": 3800,
//       amt: 2500,
//     },
//     {
//       name: 'July',
//       "Active User": 3490,
//       "Sales Rate": 4300,
//       amt: 2100,
//     },
//     {
//       name: 'Aug',
//       "Active User": 2490,
//       "Sales Rate": 3300,
//       amt: 2100,
//     },
//     {
//       name: 'Sep',
//       "Active User": 5490,
//       "Sales Rate": 4300,
//       amt: 2100,
//     },
//     {
//       name: 'Oct',
//       "Active User": 2290,
//       "Sales Rate": 3000,
//       amt: 2100,
//     },
//     {
//       name: 'Nov',
//       "Active User": 4490,
//       "Sales Rate": 4700,
//       amt: 2100,
//     },
//     {
//       name: 'Dec',
//       "Active User": 5490,
//       "Sales Rate": 6300,
//       amt: 2100,
//     },
// ];

const Chart = ({title, data, dataKey1, dataKey2, grid}) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    { grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" activeDot={{ r: 6 }} />
                </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Chart
