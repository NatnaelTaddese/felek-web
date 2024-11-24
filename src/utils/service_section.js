// Services hover effect
document.querySelectorAll(".service-item").forEach((item) => {
  item.addEventListener("mouseenter", function (_e) {
    const hoverInfo = document.querySelector(".hover-info");
    hoverInfo.innerHTML = this.getAttribute("data-info"); // Use innerHTML for multiline
    hoverInfo.style.display = "block";
    hoverInfo.style.opacity = "1";
  });

  item.addEventListener("mousemove", function (e) {
    const hoverInfo = document.querySelector(".hover-info");
    hoverInfo.style.left = `${e.pageX + 10}px`;
    hoverInfo.style.top = `${e.pageY + 10}px`;
  });

  item.addEventListener("mouseleave", function () {
    const hoverInfo = document.querySelector(".hover-info");
    hoverInfo.style.opacity = "0";
    hoverInfo.style.display = "none";
  });
});
