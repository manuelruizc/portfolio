// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  triggerElement: "#projects-title",
})
  .setClassToggle("#projects-title", "section-title--active") // add class toggle

  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#skills-title",
})
  .setClassToggle("#skills-title", "section-title--active") // add class toggle

  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#about-title",
})
  .setClassToggle("#about-title", "section-title--active") // add class toggle

  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#skills-title span:last-of-type",
})
  .setClassToggle(".skills-container div", "skill--active") // add class toggle

  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#network-container",
})
  .setClassToggle("nav", "nav--active") // add class toggle

  .addTo(controller);

const skills = document.getElementById("skills-title");
const projects = document.getElementById("projects-title");
const about = document.getElementById("about-title");
window.addEventListener("scroll", (e) => {
  const activeLinkClass = "nav-link-container--active";
  // const navLinks = document.getElementsByClassName('nav-link-container');
  const windowHeight = window.screen.height;
  const aboutTopDistance = (
    (100 / windowHeight) *
    about.getBoundingClientRect().top
  ).toFixed(0);
  const projectsTopDistance = (
    (100 / windowHeight) *
    projects.getBoundingClientRect().top
  ).toFixed(0);
  const skillsTopDistance = (
    (100 / windowHeight) *
    skills.getBoundingClientRect().top
  ).toFixed(0);

  if (
    projectsTopDistance <= 48 &&
    skillsTopDistance > 48 &&
    aboutTopDistance > 48
  ) {
    const [projectsLink, skillsLink, aboutLink] = navlinks;
    projectsLink.classList.add(activeLinkClass);
    skillsLink.classList.remove(activeLinkClass);
    aboutLink.classList.remove(activeLinkClass);
  }
  if (
    skillsTopDistance <= 48 &&
    aboutTopDistance > 48 &&
    projectsTopDistance < 0
  ) {
    const [projectsLink, skillsLink, aboutLink] = navlinks;
    skillsLink.classList.add(activeLinkClass);
    projectsLink.classList.remove(activeLinkClass);
    aboutLink.classList.remove(activeLinkClass);
  }
  if (
    aboutTopDistance <= 48 &&
    skillsTopDistance < 0 &&
    projectsTopDistance < 0
  ) {
    const [projectsLink, skillsLink, aboutLink] = navlinks;
    aboutLink.classList.add(activeLinkClass);
    projectsLink.classList.remove(activeLinkClass);
    skillsLink.classList.remove(activeLinkClass);
  }
});
