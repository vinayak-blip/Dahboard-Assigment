
import React from "react";
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer,
//   } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import 
// { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
// from 'recharts';

  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: "Aug",
      uv: 3590,
      pv: 4400,
      amt: 2800
    },
    {
      name: "Sep",
      uv: 2530,
      pv: 4591,
      amt: 2491
    },
    {
      name: "Oct",
      uv: 2492,
      pv: 4381,
      amt: 2495
    },
    {
      name: "Nov",
      uv: 2483,
      pv: 4618,
      amt: 2671
    },
    {
      name: "Dec",
      uv: 2791,
      pv: 4691,
      amt: 2891
    },
  ];

const Chart = () => {

  return (
    <>
        <ResponsiveContainer width="100%" height="100%" aspect={2/1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </ResponsiveContainer>
    </>
  )
}

export default Chart;