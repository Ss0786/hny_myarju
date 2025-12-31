document.addEventListener("DOMContentLoaded", () => {
  const tapBtns = document.querySelectorAll(".tap-btn");
  const revealBtn = document.getElementById("revealBtn");
  const messageBox = document.getElementById("messageBox");
  const message = document.getElementById("message");
  const music = document.getElementById("music");
  const scPlayer = document.getElementById("sc-player");
  const countdown = document.getElementById("countdown");

  // 🎆 COUNTDOWN TO 2026 MIDNIGHT
  const targetDate = new Date("January 1, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdown.innerHTML = "🎉 Welcome 2026, Arju 🎉";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdown.innerHTML =
      `⏳ ${d}d ${h}h ${m}m ${s}s left till 2026`;
  }, 1000);

  // 💌 TAP FLOW
  tapBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "💖 Done";
      btn.disabled = true;

      if ([...tapBtns].every(b => b.disabled)) {
        revealBtn.classList.remove("hidden");
      }
    });
  });

  // 💖 REVEAL LOVE
  revealBtn.addEventListener("click", () => {
    revealBtn.classList.add("hidden");
    messageBox.classList.remove("hidden");
    music.classList.remove("hidden");

    // 🎶 NEW YEAR ROMANTIC SONG (SoundCloud)
    scPlayer.src =
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/inder-kirat/sets/haseen-talwinder-new-song&auto_play=true&color=%23ff66cc";

    showMessage();
    fireworks();
  });

  function showMessage() {
    const lines = [
      "💖 Happy New Year Arju 💖",
      "You made my past year beautiful ✨",
      "In 2026, I promise you more love 💞",
      "More smiles 😊",
      "More kisses 💋",
      "More forever with you ❤️"
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        const p = document.createElement("p");
        p.textContent = lines[i];
        message.appendChild(p);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 2500);
  }

  // 🎆 FIREWORKS
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function fireworks() {
    setInterval(() => {
      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random() * 360},100%,70%)`;
      ctx.fill();
    }, 80);
  }
});
