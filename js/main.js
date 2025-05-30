console.log("Portfolio Carregado!");

tsParticles.load("tsparticles", {
  fpsLimit: 100,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#10b981",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.6,
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "bounce",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
      },
    },
  },
  detectRetina: true,
});

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  btn.classList.toggle("hidden", window.scrollY < 300);
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
