export default function attach_hero_animation() {
  let lastScrollTop = 0;
  const resizeDiv = document.getElementById("resizeDiv");
  let scale = 1; // Initial scale (100%)

  // Set bounds for minimum and maximum scale values
  const minScale = 1; // Minimum size is 100% (original size)
  const maxScale = 1.6; // 150% of original size

  globalThis.addEventListener("scroll", () => {
    const scrollTop =
      globalThis.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down, increase scale
      scale = Math.min(scale + 0.05, maxScale); // Increment but cap at maxScale
    } else {
      // Scrolling up, decrease scale but don't go below 1
      scale = Math.max(scale - 0.05, minScale); // Decrease but not below minScale
    }

    resizeDiv.style.transform = `scale(${scale})`;

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scrolling values
  });

  const checkbox = document.getElementById("menu-toggle");
  const dropdown = document.querySelector(".mobileDropdown");

  checkbox.addEventListener("change", () => {
    dropdown.style.display = checkbox.checked ? "flex" : "none";
  });
}
