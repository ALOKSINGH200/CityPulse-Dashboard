const alertsData = [
  {
    category: "Traffic",
    level: "MEDIUM",
    title: "Road Construction on Main St",
    desc: "Expect delays between 9 AM - 5 PM. Alternative routes via Park Avenue.",
    time: "Jan 15, 08:30 AM",
    color: "traffic",
    icon: "fa-triangle-exclamation"
  },
  {
    category: "Health",
    level: "LOW",
    title: "Free Health Camp - City Hospital",
    desc: "Free health check-up camp on Jan 20th. Register online or walk-in.",
    time: "Jan 15, 10:00 AM",
    color: "health",
    icon: "fa-circle-exclamation"
  },
  {
    category: "Weather",
    level: "HIGH",
    title: "Heavy Rain Alert",
    desc: "Thunderstorms expected. Avoid low-lying areas.",
    time: "Jan 15, 02:20 PM",
    color: "weather",
    icon: "fa-circle-exclamation"
  },
  {
    category: "Public Notice",
    level: "MEDIUM",
    title: "Water Supply Maintenance",
    desc: "Water supply interrupted in Zone C from 11 PM to 4 AM.",
    time: "Jan 15, 07:00 AM",
    color: "notice",
    icon: "fa-triangle-exclamation"
  },
  {
    category: "Traffic",
    level: "HIGH",
    title: "Marathon Event - Downtown",
    desc: "Several roads closed 6 AM - 12 PM.",
    time: "Jan 14, 04:45 PM",
    color: "traffic",
    icon: "fa-circle-exclamation"
  },
  {
    category: "Public Notice",
    level: "LOW",
    title: "Community Meeting - Jan 25",
    desc: "Town hall meeting at City Center.",
    time: "Jan 13, 09:15 AM",
    color: "notice",
    icon: "fa-circle-exclamation"
  }
];

const list = document.getElementById("alertList");

function renderAlerts(category = "all") {
  list.innerHTML = "";

  alertsData
    .filter(alert => category === "all" || alert.category === category)
    .forEach(a => {
      const box = `
        <div class="alert-box ${a.color}">
          <div class="tag">${a.category}</div>
          <span class="priority ${a.level.toLowerCase()}">${a.level}</span>

          <div class="alert-title-text">${a.title}</div>
          <div class="alert-desc">${a.desc}</div>

          <div class="alert-time">
            <i class="fa-regular fa-clock"></i> ${a.time}
          </div>

          <i class="fa-solid ${a.icon} alert-icon"></i>
        </div>
      `;
      list.innerHTML += box;
    });
}

renderAlerts();

/* FILTER BUTTON LOGIC */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderAlerts(btn.dataset.category);
  });
});
