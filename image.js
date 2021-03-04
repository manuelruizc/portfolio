const container = document.getElementById("hers");
const img = document.getElementById("clip-img");
const rectangles = document.getElementsByClassName("rectangles");
container.addEventListener("mousemove", function (e) {
  for (let i = 0; i < rectangles.length; i++) {
    const rect = rectangles[i];
    rect.classList.add("rectangles-out");
  }
  const { clientWidth, clientHeight } = e.target;
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left; //x position within the element.
  const y = e.clientY - rect.top; //y position within the element.
  const percentageX = (100 / clientWidth) * x;
  const percentageY = (100 / clientHeight) * y;
  img.style["clip-path"] = `circle(20% at ${percentageX}% ${percentageY}%)`;
});
container.addEventListener("mouseout", function () {
  for (let i = 0; i < rectangles.length; i++) {
    const rect = rectangles[i];
    rect.classList.remove("rectangles-out");
  }
  img.style["clip-path"] = "";
});
