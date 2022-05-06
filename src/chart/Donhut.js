import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



export default function Donhut({ color1, color2 })
{
    ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [ 12,8],
      backgroundColor: [
          color1,
          color2
      ],
      borderWidth: 1,
    },
  ],
};

  return (
      <Doughnut data={data} color1={color1} color2={color2}/>
  )
}
