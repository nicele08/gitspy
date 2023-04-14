import { Line } from 'react-chartjs-2';
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

import { useTheme } from '@/components/contexts/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const ContributionsGraph = ({
  contributors = [],
}: {
  contributors: any[];
}) => {
  const { theme } = useTheme();
  // Extract the data for each contributor
  const data = contributors.map(contributor => ({
    label: contributor.author?.login,
    data: contributor.weeks.map((week: any) => week.c),
  }));

  const chartData = {
    labels: contributors[0]?.weeks.map((week: any) =>
      new Date(week.w * 1000).toLocaleDateString(),
    ),
    datasets: data.map((contributor, index) => ({
      label: contributor.label,
      data: contributor.data,
      fill: false,
      borderColor: index === 0 ? '#4F46E5' : '#9CA3AF',
    })),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Contributions Graph',
      },
    },
  };

  return (
    <Line
      data={chartData}
      options={chartOptions}
      className="bg-white dark:bg-gray-900 rounded-lg dark:p-2"
    />
  );
};

export default ContributionsGraph;
