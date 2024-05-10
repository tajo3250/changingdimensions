function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function log() {
  const log = document.getElementById("log");
  const logElement = document.createElement("p");
  const message = Array.from(arguments).join(" ");
  logElement.textContent = message;
  log.appendChild(logElement);
  console.log(message);
  log.classList.add("scroll-down");
}

let pi = Math.PI;
async function main(height) {
  let radius = 0
  height = Math.round(height)
  for (var i = 1; i < 21; i++) {
    radius = radius + 1

    let volumeCylinder = pi * (radius * radius) * height;
    let volumeCone = pi * (radius * radius) * height / 3;

    volumeCylinder = Math.round(volumeCylinder * 100) / 100;
    volumeCone = Math.round(volumeCone * 100) / 100;

    let difference = Math.round((volumeCylinder / volumeCone) * 100) / 100

    log("Height:", height, "| Difference:", `/${difference}`, "| Radius:", radius, "| Cylinder Volume:", volumeCylinder, "| Cone Volume:", volumeCone);
  }
}

function startLoop() {
  main(
    parseFloat(document.getElementById('heightInput').value),
  );
}

const logContainer = document.getElementById('log');
function scrollToBottom() {
  logContainer.scrollTop = logContainer.scrollHeight;
}
logContainer.addEventListener('DOMNodeInserted', scrollToBottom);
