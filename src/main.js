import "./utils/service_section.js";
import "./utils/loading.js";
import "./utils/logo_scale_up.js";

import DOMPurify from "dompurify";
import load_assets from "./utils/loading.js";

const loadHtmlComponent = async (id, filePath) => {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Component loaded:", filePath);
    document.getElementById(id).innerHTML = DOMPurify.sanitize(html);
  } catch (error) {
    console.error("Error loading component:", error);
  }
};

console.log("Loading components...");

(async () => {
  const components = [
    loadHtmlComponent("placeholder-header", "/src/components/header.html"),
    loadHtmlComponent("placeholder-hero", "/src/components/hero.html"),
    loadHtmlComponent("placeholder-services", "/src/components/services.html"),
    loadHtmlComponent("placeholder-events", "/src/components/events.html"),
    loadHtmlComponent("placeholder-footer", "/src/components/footer.html"),
  ];

  // Wait for all components to load
  await Promise.all(components);

  // Initialize assets after components are loaded
  load_assets();
  attach_hero_animation();
})();
