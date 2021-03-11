document.getElementById("year").innerHTML = new Date().getFullYear();
const navlinks = document.getElementsByClassName("nav-link-container");
const onClickNavlink = (event, index) => {
  event.preventDefault();
  let { textContent } = event.target;
  textContent = textContent.toLowerCase();
  console.log(textContent);
  if (textContent === "acerca de mi" || textContent === "about me") {
    textContent = "about";
  }
  if (textContent === "proyectos") {
    textContent = "projects";
  }
  if (textContent === "habilidades") {
    textContent = "skills";
  }
  const id = document.getElementById(textContent + "-title");
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

const techonologyCursor = document.getElementById("technology-logo-container");
const cursorBackground = document.getElementById("cursor-background");
const techonologies = document.getElementsByClassName("skill-span");
for (let i = 0; i < techonologies.length; i++) {
  const technology = techonologies[i];
  technology.addEventListener("mousemove", (e) => {
    const { textContent } = e.target;
    let fileName = textContent.split(" ").join("").toLowerCase() + "-logo.png";
    if (fileName === "c#-logo.png") fileName = "csharp-logo.png";
    const image = `/assets/imgs/${fileName}`;
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
