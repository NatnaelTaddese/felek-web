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

    // Sanitize the loaded HTML
    const sanitizedHtml = DOMPurify.sanitize(html);

    // Create a temporary container to parse the HTML string
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = sanitizedHtml;

    // Replace the placeholder element with the parsed content
    const placeholder = document.getElementById(id);
    if (placeholder) {
      placeholder.replaceWith(...tempContainer.childNodes);
    } else {
      console.warn(`Placeholder element with id "${id}" not found.`);
    }
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
  try {
    attach_hero_animation();
  } catch (error) {
    console.error("Error in attach_hero_animation:", error);
  }

  try {
    attach_service_hover();
  } catch (error) {
    console.error("Error in attach_service_hover:", error);
  }
})();
