import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function VisitorsChart({ totalVisitors }: { totalVisitors: number }) {
  const [chartData, setChartData] = useState({
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Visitors",
        data: [100, 200, 300, 400, totalVisitors],
        borderColor: "#11C1AF",
        backgroundColor: "rgba(17, 193, 175, 0.2)",
      },
    ],
  });

  useEffect(() => {
    setChartData(prev => ({
      ...prev,
      datasets: [{ ...prev.datasets[0], data: [...prev.datasets[0].data.slice(1), totalVisitors] }],
    }));
  }, [totalVisitors]);

  return <Line data={chartData} />;
}
