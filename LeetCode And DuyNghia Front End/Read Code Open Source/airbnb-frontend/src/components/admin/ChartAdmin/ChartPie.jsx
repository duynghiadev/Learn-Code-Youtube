import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const ChartPie = () => {
  useEffect(() => {
    (async function () {
      const pieConfig = {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [80, 15, 5],
              /**
               * These colors come from Tailwind CSS palette
               * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
               */
              backgroundColor: ["#0694a2", "#1c64f2", "#7e3af2"],
              label: "Đơn vị %",
            },
          ],
          labels: ["Thuê phòng", "Bảo hiểm phòng thuê", "Phí dịch vụ"],
        },
        options: {
          responsive: true,
          cutoutPercentage: 80,
          /**
           * Default legends are ugly and impossible to style.
           * See examples in charts.html to add your own legends
           *  */
          legend: {
            display: false,
          },
        },
      };

      new Chart(document.getElementById("pie"), pieConfig);
    })();
  }, []);

  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        Doanh thu
      </h4>
      <canvas id="pie" className=" max-h-[300px]"></canvas>
      <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
        {/* <!-- Chart legend --> */}

        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
          <span>Thuê phòng</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
          <span>Bảo hiểm phòng thuê</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
          <span>Phí dịch vụ</span>
        </div>
      </div>
    </div>
  );
};

export default ChartPie;
