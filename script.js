const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
  type: "line",
  data: {
    labels: [120, 140, 130, 240],
    datasets: [
      {
        data: [120, 140, 130, 240],
        backgroundColor: ["crimson", "lightgreen", "lightblue", "violet"],
      },
    ],
  },

  options: {
    scales: {
      y: {
        suggestedMax: 500,
        ticks: {
          font: {
            size: 18,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 18,
          },
        },
      },
    },
  },
});
