import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartLine = () => {
  useEffect(() => {
    (async function () {
      const lineConfig = {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Nam",
              /**
               * These colors come from Tailwind CSS palette
               * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
               */
              backgroundColor: "#0694a2",
              borderColor: "#0694a2",
              data: [43, 48, 40, 54, 67, 73, 70],
              fill: false,
            },
            {
              label: "Nữ",
              fill: false,
              /**
               * These colors come from Tailwind CSS palette
               * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
               */
              backgroundColor: "#7e3af2",
              borderColor: "#7e3af2",
              data: [24, 50, 64, 74, 52, 51, 65],
            },
          ],
        },
        options: {
          responsive: true,
          /**
           * Default legends are ugly and impossible to style.
           * See examples in charts.html to add your own legends
           *  */
          legend: {
            display: false,
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            x: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
            y: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
            },
          },
        },
      };

      new Chart(document.getElementById("line"), lineConfig);
    })();
  }, []);
  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        Người dùng
      </h4>
      <canvas id="line" className=" max-h-[300px]"></canvas>
      <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
        {/* <!-- Chart legend --> */}
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
          <span>Nam</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
          <span>Nữ</span>
        </div>
      </div>
    </div>
  );
};

export default ChartLine;
