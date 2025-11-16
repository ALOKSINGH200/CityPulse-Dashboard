// =======================================
// LIVE DATE & TIME UPDATE
// =======================================

function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("currDate").textContent =
        now.toLocaleDateString("en-US", options);

    document.getElementById("currTime").textContent =
        now.toLocaleTimeString("en-US", { hour12: true });
}

setInterval(updateDateTime, 1000);
updateDateTime();


// =======================================
// DARK MODE TOGGLE (SAVED IN localStorage)
// =======================================

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}


// =======================================
// FEEDBACK FORM (if exists on page)
// =======================================

const feedbackBtn = document.getElementById("sendFeedback");
if (feedbackBtn) {
    feedbackBtn.addEventListener("click", () => {
        const text = document.getElementById("feedbackBox").value.trim();
        if (text.length < 5) {
            alert("Please write at least 5 characters.");
            return;
        }
        document.querySelector(".success-msg").style.display = "block";
        document.getElementById("feedbackBox").value = "";
    });
}


// =======================================
// ALERT PAGE AUTO-RENDER
// (If element exists on alerts.html)
// =======================================

import { alertsData } from "./data.js";

const alertContainer = document.getElementById("alertsList");
if (alertContainer) {
    alertsData.forEach(alert => {
        const div = document.createElement("div");
        div.className = "alert-card";

        div.innerHTML = `
            <div>
                <h3>${alert.message}</h3>
            </div>
            <span class="alert-level ${alert.level.toLowerCase()}">${alert.level}</span>
        `;

        alertContainer.appendChild(div);
    });
}
