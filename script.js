const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

const username= "coalition";
const password = "skills-test";  // your real password
const auth = btoa(`${username}:${password}`); // base64 encode

fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
  headers: {
    "Authorization": `Basic ${auth}`
  }
})
  .then(res => res.json())
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(err => {
    console.error("Fetch error:", err);
  });

















const ctx = document.getElementById("bpChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [120, 125, 160, 130, 150, 160],
        borderColor: "#d46fc5",
        backgroundColor: "rgba(212, 111, 197, 0.1)",
        tension: 0.4,
        pointRadius: 5,
        fill: false,
      },
      {
        label: "Diastolic",
        data: [90, 70, 85, 65, 75, 78],
        borderColor: "#8466e2",
        backgroundColor: "rgba(132, 102, 226, 0.1)",
        tension: 0.4,
        pointRadius: 5,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 12,
        },
      },
      title: {
        display: true,
        text: "Blood Pressure - Last 6 months",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        title: {
          display: true,
          text: "mmHg",
        },
      },
    },
  },
});
