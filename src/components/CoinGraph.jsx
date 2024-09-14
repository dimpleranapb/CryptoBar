import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { chartDays } from "../config/data";
import { useCrypto } from "../CryptoContext";
import { SyncLoader } from "react-spinners";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

// Registering the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinGraph = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency, loading, setLoading } = useCrypto();

  const fetchHistoricData = async () => {
    const apiUrl = HistoricalChart(coin.id, days, currency);

    setLoading(true); // Show loader when starting fetch
    setHistoricData(null);

    try {
      const { data } = await axios.get(apiUrl);

      if (data && data.prices) {
        setHistoricData(data.prices);
      } else {
        setHistoricData(null); // Avoid errors when no data
      }
    } catch (error) {
      console.error("Error fetching historic data:", error);
    } finally {
      setLoading(false); // Hide loader after fetching data
    }
  };

  useEffect(() => {
    if (coin && currency) {
      fetchHistoricData();
    }
  }, [coin, currency, days]);

  return (
    <div className="w-full lg:w-3/4 mx-auto p-4 bg-transparent text-white border-gray-400">
      {loading ? (
        <div className="flex items-center justify-center h-[200px] md:h-[450px] lg:h-[500px]">
          <SyncLoader color="#1E90FF" />
        </div>
      ) : (
        <div className="lg:h-[500px] sm:h-[200px] flex justify-center items-center">
          {historicData ? (
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price (Past ${days} Days) in ${currency}`,
                    borderColor: "#2563EB", // Tailwind blue-600
                    borderWidth: 2,
                    fill: false,
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 0, // Removes dots from the line chart
                    hoverRadius: 0, // Prevents dots from appearing on hover
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      color: "white",
                    },
                  },
                  tooltip: {
                    backgroundColor: "#1f2937", // Tailwind gray-800
                    titleColor: "white",
                    bodyColor: "white",
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      color: "white",
                    },
                    grid: {
                      color: "#374151", // Tailwind gray-700
                    },
                  },
                  y: {
                    ticks: {
                      color: "white",
                    },
                    grid: {
                      color: "#374151", // Tailwind gray-700
                    },
                  },
                },
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-[400px]">
              <SyncLoader color="#1E90FF" />
            </div>
          )}
        </div>
      )}
      {historicData ? (
        <div className="flex justify-between mt-4 gap-6">
          {chartDays.map((day) => (
            <button
              className={`w-full p-2 border-2 rounded-md text-white ${
                day.value === days
                  ? "bg-custom-dark-btn text-white" // Selected button style
                  : " border-blue-600 hover:bg-blue-800 text-blue-600" // Default button style
              }`}
              key={day.value}
              onClick={() => setDays(day.value)}
            >
              {day.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CoinGraph;
