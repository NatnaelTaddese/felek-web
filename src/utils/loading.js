export default function load_assets() {
  const waitForFontsAndAssets = Promise.all([
    new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        globalThis.addEventListener("load", resolve); // Ensure it fires if not already loaded
      }
    }),
    document.fonts.ready, // Wait for fonts to load
  ]);

  waitForFontsAndAssets.then(() => {
    const loadingScreen = document.getElementById("loading-screen");
    const body = document.querySelector("body");

    // Hide the loading screen with a smooth transition
    loadingScreen.classList.add("hidden");

    // Allow scrolling after the loading screen disappears
    setTimeout(() => {
      body.style.overflow = "auto";
    }, 500); // Matches the CSS transition duration
  });
}
