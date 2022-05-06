import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

export default function LineChart({ color1, color2 })
{
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 3, max: 9 })),
        borderColor: color1,
        backgroundColor: color2,
      },
    ],
  };
  return (
    <Line data={data} color1={color1} color2={color2}/>
  )
}
