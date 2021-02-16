const navlinks = document.getElementsByClassName("nav-link-container");
const onClickNavlink = (event, index) => {
  event.preventDefault();
  const { textContent } = event.target;
  const id = document.getElementById(textContent.toLowerCase() + "-title");
  id.scrollIntoView();
  const activeClass = "nav-link-container--active";
  for (let i = 0; i < navlinks.length; i++) {
    const navlink = navlinks[i];
    if (index === i) navlink.classList.add(activeClass);
    else navlink.classList.remove(activeClass);
  }
};
for (let i = 0; i < navlinks.length; i++) {
  const navelement = navlinks[i];
  navelement.addEventListener("click", (e) => onClickNavlink(e, i));
}
var path = document.getElementsByTagName("path")[0];
var length = path.getTotalLength();
// Clear any previous transition
path.style.transition = path.style.WebkitTransition = "none";
// Set up the starting positions
path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
  "stroke-dashoffset 2s ease-in-out";
// Go!
path.style.strokeDashoffset = "0";

const techonologyCursor = document.getElementById("technology-logo-container");
const cursorBackground = document.getElementById("cursor-background");
const techonologies = document.getElementsByClassName("skill-span");
for (let i = 0; i < techonologies.length; i++) {
  const technology = techonologies[i];
  technology.addEventListener("mousemove", (e) => {
    const { textContent } = e.target;
    let fileName = textContent.split(" ").join("").toLowerCase() + "-logo.png";
    if (fileName === "c#-logo.png") fileName = "csharp-logo.png";
    const image = `./assets/imgs/${fileName}`;
    cursorBackground.style.backgroundImage = `url(${image})`;
    techonologyCursor.classList.add("custom-cursor--active");
  });
  technology.addEventListener("mouseout", () => {
    if (techonologyCursor.classList.contains("custom-cursor--active"))
      techonologyCursor.classList.remove("custom-cursor--active");
  });
}

window.addEventListener("mousemove", (e) => {
  const { pageX, pageY } = e;
  techonologyCursor.style.top = pageY - 140 + "px";
  techonologyCursor.style.left = pageX - 70 + "px";
});
