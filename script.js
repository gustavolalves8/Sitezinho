// ================= MENU =================
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function logout() {
  window.location.href = "index.html";
}

// ================= DISPOSITIVOS =================
let deviceCount = 48;
setInterval(() => {
  deviceCount += Math.floor(Math.random() * 3) - 1;
  deviceCount = Math.max(40, Math.min(55, deviceCount));
  document.getElementById("devicesCount").textContent = deviceCount;
}, 3000);

// ================= ALERTAS =================
let alertCount = 2;
const alertsEl = document.getElementById("alerts");

setInterval(() => {
  alertCount = Math.floor(Math.random() * 4);
  alertsEl.textContent = alertCount;
  alertsEl.classList.toggle("alert-blink", alertCount > 0);
}, 5000);

// ================= LOGS =================
const logBox = document.getElementById("logBox");
const events = [
  "Firewall bloqueou IP suspeito",
  "Tentativa de brute force detectada",
  "Varredura de portas identificada",
  "Pico de tráfego anormal",
  "Conexão maliciosa interrompida"
];

setInterval(() => {
  const msg = `[${new Date().toLocaleTimeString()}] ${events[Math.floor(Math.random() * events.length)]}`;
  logBox.innerHTML = msg + "<br>" + logBox.innerHTML;
}, 4000);

// ================= GRÁFICO TRÁFEGO =================
const trafficCtx = document.getElementById("trafficChart");
let trafficData = Array.from({ length: 12 }, () => Math.random() * 500);

const trafficChart = new Chart(trafficCtx, {
  type: "line",
  data: {
    labels: Array.from({ length: 12 }, (_, i) => i),
    datasets: [{
      label: "Tráfego (Mbps)",
      data: trafficData,
      borderColor: "#38bdf8",
      backgroundColor: "rgba(56,189,248,0.2)",
      tension: 0.4,
      fill: true
    }]
  },
  options: { animation: { duration: 800 } }
});

// ================= GRÁFICO VELOCIDADE =================
const speedCtx = document.getElementById("speedChart");
let download = Array.from({ length: 12 }, () => Math.random() * 400);
let upload = Array.from({ length: 12 }, () => Math.random() * 200);

const speedChart = new Chart(speedCtx, {
  type: "line",
  data: {
    labels: Array.from({ length: 12 }, (_, i) => i),
    datasets: [
      {
        label: "Download",
        data: download,
        borderColor: "#22c55e",
        tension: 0.4
      },
      {
        label: "Upload",
        data: upload,
        borderColor: "#facc15",
        tension: 0.4
      }
    ]
  }
});

// ================= ATUALIZA GRÁFICOS + RISCO =================
function updateChartsAndRisk() {
  trafficData.shift();
  const newTraffic = Math.random() * 600;
  trafficData.push(newTraffic);

  download.shift();
  upload.shift();
  download.push(Math.random() * 500);
  upload.push(Math.random() * 250);

  trafficChart.update();
  speedChart.update();

  // ===== CLASSIFICAÇÃO INTELIGENTE DE RISCO =====
  const riskEl = document.getElementById("risk");

  if (alertCount >= 3 || newTraffic > 500) {
    riskEl.textContent = "ALTO";
    riskEl.className = "risk-high";
  } else if (alertCount >= 1 || newTraffic > 350) {
    riskEl.textContent = "MÉDIO";
    riskEl.className = "risk-medium";
  } else {
    riskEl.textContent = "BAIXO";
    riskEl.className = "risk-low";
  }
}

setInterval(updateChartsAndRisk, 3000);

// ================= AÇÕES =================
function action(msg) {
  alert(msg + " com sucesso!");
}