// ===== MENU (SIDEBAR) =====
function showSection(id) {
  document.querySelectorAll(".section").forEach(s =>
    s.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}

function logout() {
  window.location.href = "index.html";
}

// ===== CONTADORES =====
let deviceCount = 48;
let alertCount = 2;

setInterval(() => {
  deviceCount += Math.floor(Math.random() * 3 - 1);
  deviceCount = Math.max(45, Math.min(60, deviceCount));
  document.getElementById("devicesCount").textContent = deviceCount;

  alertCount = Math.floor(Math.random() * 4);
  const alertEl = document.getElementById("alerts");
  alertEl.textContent = alertCount;
  alertEl.classList.toggle("alert-blink", alertCount > 0);
}, 4000);

// ===== LOG SOC =====
const logBox = document.getElementById("logBox");
const events = [
  "Firewall bloqueou IP suspeito",
  "Tentativa de brute force detectada",
  "Port scan identificado",
  "Pico de tráfego anormal",
  "Conexão maliciosa encerrada"
];

setInterval(() => {
  const msg = `[${new Date().toLocaleTimeString()}] ${
    events[Math.floor(Math.random() * events.length)]
  }`;
  logBox.innerHTML = msg + "<br>" + logBox.innerHTML;
}, 3500);

// ===== DISPOSITIVOS RECENTES =====
const deviceTable = document.getElementById("commonDevicesLog");

const devices = [
  { name: "Notebook RH", type: "Computador" },
  { name: "Tablet Maria", type: "Tablet" },
  { name: "iPhone João", type: "Celular" },
  { name: "Desktop Financeiro", type: "Computador" }
];

function randomIP() {
  return `192.168.0.${Math.floor(Math.random() * 200 + 10)}`;
}

function updateDeviceLog() {
  const device = devices[Math.floor(Math.random() * devices.length)];
  const time = new Date().toLocaleTimeString();

  deviceTable.innerHTML = `
    <tr>
      <td>${time}</td>
      <td>${device.name}</td>
      <td>${randomIP()}</td>
      <td>${device.type}</td>
      <td class="online">Online</td>
    </tr>
  ` + deviceTable.innerHTML;
}

setInterval(updateDeviceLog, 3000);

// ===== AÇÕES =====
function action(msg) {
  alert(msg + " com sucesso!");
}
// ===== GRÁFICO TRÁFEGO =====
const trafficCtx = document.getElementById("trafficChart");

let trafficData = Array.from({length:12}, () => Math.random()*450);

const trafficChart = new Chart(trafficCtx, {
  type: "line",
  data: {
    labels: Array.from({length:12}, (_,i)=>i),
    datasets: [{
  label: "Tráfego (Mbps)",
  data: trafficData,
  borderColor: "#38bdf8",
  backgroundColor: "rgba(56,189,248,0.35)",
  pointRadius: 6,
  pointHoverRadius: 9,
  pointBackgroundColor: "#38bdf8",
  pointBorderColor: "#fff",
  tension: 0.4,
  fill: true
}]
  },
  options: {
  responsive: true,
  interaction: {
    mode: 'nearest',
    intersect: true
  },
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#020617",
      borderColor: "#38bdf8",
      borderWidth: 1,
      titleColor: "#fff",
      bodyColor: "#e5e7eb"
    }
  },
  animation: { duration: 800 }
}
});

// ===== DOWNLOAD VS UPLOAD =====
const speedCtx = document.getElementById("speedChart");

let download = Array.from({length:12}, () => Math.random()*300);
let upload = Array.from({length:12}, () => Math.random()*180);

const speedChart = new Chart(speedCtx, {
  type: "line",
  data: {
    labels: Array.from({length:12}, (_,i)=>i),
    datasets: [
      {
        label: "Download",
        data: download,
        borderColor: "#22c55e",
        pointRadius: 5,
        tension: 0.4
      },
      {
        label: "Upload",
        data: upload,
        borderColor: "#facc15",
        pointRadius: 5,
        tension: 0.4
      }
    ]
  },
  options: {
    plugins: {
      tooltip: { enabled: true }
    }
  }
});
// ===== ATUALIZAÇÃO CONTÍNUA =====
setInterval(() => {
  trafficData.shift();
  trafficData.push(Math.random()*500);

  download.shift();
  upload.shift();
  download.push(Math.random()*350);
  upload.push(Math.random()*200);

  trafficChart.update();
  speedChart.update();
}, 3000);

// ===== AÇÕES =====
function action(msg){
  alert(msg + " com sucesso!");
}