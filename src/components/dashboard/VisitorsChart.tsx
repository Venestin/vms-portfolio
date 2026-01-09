import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type Props = {
  visitorsHistory: number[];
};

export function VisitorsChart({ visitorsHistory }: Props) {
  const data = {
    labels: visitorsHistory.map((_, i) => `Visit ${i + 1}`),
    datasets: [
      {
        label: "Visitors",
        data: visitorsHistory,
        borderColor: "#11C1AF",
        backgroundColor: "rgba(17,193,175,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Visitors Overview</h3>
      <Line data={data} />
    </div>
  );
}
