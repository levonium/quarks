import { Chart, registerables } from 'chart.js'
import { chartColors, letters } from './data'
Chart.register(...registerables)

export const printChart = (
  wrapper: HTMLCanvasElement,
  data: object,
  labels: string[] | null = null,
) => {
  return new Chart(wrapper, {
    type: 'bar',
    data: {
      labels: labels || letters,
      datasets: [
        {
          label: '# of countries',
          data: data,
          backgroundColor: chartColors(),
        },
      ],
    },
    options: {
      aspectRatio: 2.4,
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true,
        },
      },
    },
  })
}
