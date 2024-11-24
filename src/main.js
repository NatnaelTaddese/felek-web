// import "./utils/logo_scale_up.js";
import "./utils/service_section.js";
import "./utils/loading.js";
import DOMPurify from "dompurify";

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
loadHtmlComponent("header", "/src/components/header.html");
loadHtmlComponent("header", "/heaeeder.html");
loadHtmlComponent("hero", "/src/components/hero.html");
loadHtmlComponent("services", "/src/components/services.html");
loadHtmlComponent("events", "/src/components/events.html");
loadHtmlComponent("footer", "/src/components/footer.html");
