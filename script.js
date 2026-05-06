function goTo(screenNumber) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  document.getElementById("s" + screenNumber).classList.add("active");

  // build cake when screen 4 opens
  if (screenNumber === 4) {
    createSpiralCake();
  }
}
function createSpiralCake() {
  const container = document.getElementById("spiralCake");
  container.innerHTML = "";

  const text = "Happy Birthday ";
  const total = 80;

  let angle = 0;

  for (let i = 0; i < total; i++) {
    setTimeout(() => {
      const line = document.createElement("div");
      line.className = "spiral-line";
      line.textContent = text;

      // spiral shape (tight top, wide bottom = cake illusion)
      const radius = i * 2.5;
      angle += 18;

      const x = Math.cos((angle * Math.PI) / 180) * radius + 150;
      const y = Math.sin((angle * Math.PI) / 180) * radius + 150;

      line.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

      container.appendChild(line);
    }, i * 40); // animation delay (this is what makes it “form”)
  }
}

