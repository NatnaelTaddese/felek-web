document.addEventListener("DOMContentLoaded", () => {
  // Wait for all assets to load
  globalThis.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const heroContainer = document.querySelector(".hero-container");

    // Hide the loading screen
    loadingScreen.classList.add("hidden");

    heroContainer.classList.remove("hidden");
  });
});
