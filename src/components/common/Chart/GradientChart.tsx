import './GradientChart.scss';
import { useEffect, useRef, useState } from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  registerables,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';
import { animationDuration } from '../../../styleProps';
import { PriceAtTime } from '../../../store/features/tokens/tokensSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);
ChartJS.register(...registerables);

function hexToRgb(hex: string, opacity: number) {
  // @ts-ignore
  // eslint-disable-next-line no-return-assign
  return `rgba(${(hex = hex.replace('#', '')).match(new RegExp(`(.{${hex.length / 3}})`, 'g'))
    .map((char) => parseInt(hex.length % 2 ? char + char : char, 16))
    .concat(Number.isFinite(opacity) ? opacity : 1)
    .join(',')})`;
}

function createGradient(ctx: CanvasRenderingContext2D, height: number, color: string) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, hexToRgb(color, 0.2));
  gradient.addColorStop(1, hexToRgb(color, 0));

  return gradient;
}

interface GradientChartProps {
  items: PriceAtTime[],
  width: number;
  height: number;
  scalesX?: boolean;
  date?: boolean;
  autoSkip?: boolean;
  color?: 'green' | 'red' | 'blue';
  type?: 'bar' | 'line';
}

function GradientChart({
  items,
  width,
  height,
  scalesX = false,
  date = false,
  autoSkip = true,
  color = 'red',
  type = 'line',
}: GradientChartProps) {
  const chartRef = useRef<ChartJS | null>(null);
  const [chartData, setChartData] = useState<{ data: ChartData<'line' | 'bar'>, options: ChartOptions<'line' | 'bar'> }>({
    data: { datasets: [] },
    options: {},
  });
  const [hover, setHover] = useState(false);

  const borderColor = {
    red: '#FF4954',
    green: '#0EA45C',
    blue: '#0088CC',
  }[color];

  useEffect(() => {
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);
    const onResize = () => {
      if (chartRef.current) {
        chartRef.current?.resize();
      }
    };

    chartRef.current?.canvas.addEventListener('mouseenter', onMouseEnter);
    chartRef.current?.canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    return () => {
      chartRef.current?.canvas.removeEventListener('mouseenter', onMouseEnter);
      chartRef.current?.canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [chartRef]);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    const labels: string[] = [];
    const data: number[] = [];

    items.forEach((v) => {
      let dateTime: Date | string = new Date(v.time * 1000);
      if (date) {
        dateTime = dateTime.toLocaleDateString([], {
          day: '2-digit',
          month: '2-digit',
        });
      } else {
        dateTime = dateTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
      }

      labels.push(dateTime);
      data.push(v.price);
    });

    setChartData({
      data: {
        datasets: [
          {
            data,
            fill: true,
            backgroundColor: type === 'bar' ? borderColor : createGradient(chart.ctx, scalesX ? height - 25 : height, borderColor),
            borderWidth: type === 'bar' ? 0 : scalesX ? 2 : 1.5,
            borderColor,
            borderRadius: 8,
            pointRadius: hover ? 0 : 0,
            tension: 0.5,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: false,
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          y: { display: false },
          xAxis: {
            labels,
            ticks: {
              count: type === 'bar' ? undefined : 4,
              stepSize: 10,
              sampleSize: 10,
              autoSkip,
              autoSkipPadding: 40,
              align: 'start',
              maxRotation: 0,
              minRotation: 0,
              font: {
                family: 'Mulish',
                weight: 'bold',
                size: 14,
                lineHeight: '18px',
              },
              color: '#303757',
            },
            display: scalesX,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        animation: {
          duration: animationDuration * 2,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    });
  }, [chartRef, items, hover]);

  return (
    <ReactChart
      // @ts-ignore
      ref={chartRef}
      style={{
        // maxWidth: width,
        width: '100%',
        maxHeight: height,
      }}
      options={chartData.options}
      data={chartData.data}
      type={type}
    />
  );
}

export default GradientChart;
