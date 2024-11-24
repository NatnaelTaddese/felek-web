export default function attach_hero_animation() {
  let lastScrollTop = 0;
  const resizeDiv = document.getElementById("resizeDiv");
  if (!resizeDiv) {
    console.error("Element with id 'resizeDiv' not found.");
    return;
  }
  let scale = 1; // Initial scale (100%)

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  globalThis.addEventListener(
    "scroll",
    debounce(() => {
      const minScale = 1; // Minimum size is 100% (original size)
      const maxScale = 1.6; // 150% of original size

      const scrollTop =
        globalThis.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down, increase scale
        scale = Math.min(scale + 0.05, maxScale); // Increment but cap at maxScale
      } else {
        // Scrolling up, decrease scale
        scale = Math.max(scale - 0.05, minScale); // Decrement but cap at minScale
      }

      resizeDiv.style.transform = `scale(${scale})`;

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scrolling values
    }, 100)
  ); // Adjust the debounce delay as needed
}
