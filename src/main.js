import "./utils/logo_scale_up.js";
import "./utils/service_section.js";
import DOMPurify from "dompurify";

const loadHtmlComponent = async (id, filePath) => {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    document.getElementById(id).innerHTML = DOMPurify.sanitize(html);
  } catch (error) {
    console.error("Error loading component:", error);
  }
};

loadHtmlComponent("header", "/src/components/header.html");
loadHtmlComponent("hero", "/src/components/hero.html");
loadHtmlComponent("services", "/src/components/services.html");
loadHtmlComponent("events", "/src/components/events.html");
loadHtmlComponent("footer", "/src/components/footer.html");
