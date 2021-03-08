function setLocales(lng) {
  // NAV
  const [projectsLink, skillsLink, aboutLink] = document.getElementsByClassName(
    "nav-link"
  );
  projectsLink.textContent = locales.nav.projects[lng];
  skillsLink.textContent = locales.nav.skills[lng];
  aboutLink.textContent = locales.nav["about me"][lng];
  // FINISH NAV
  // HEADER
  const jobTitleRegular = document.getElementsByClassName("job")[0];
  const jobDescription = document.getElementsByClassName("description")[0];
  jobTitleRegular.innerHTML = locales.header.jobTitle.regular[lng];
  jobTitleRegular.innerHTML += ` <span>${locales.header.jobTitle.outlined[lng]}</span>`;
  jobDescription.textContent = locales.header.description[lng];
  // FINISH HEADER
  // TITLES
  const sectionTitles = document.querySelectorAll(".section-title span");
  setLocalesOfClass(sectionTitles, "nav");
  // FINISH TITLES
  // PROJECTS SECTION
  const technologies = document.getElementsByClassName("technology");
  setLocalesOfClass(technologies, "projects");
  const projectsLinks = document.getElementsByClassName("project-link-anchor");
  setLocalesOfClass(projectsLinks, "projects");
  const seeMore = document.querySelectorAll(".see-more a");
  setLocalesOfClass(seeMore, "projects");
  // FINISH PROJECTS SECTION
  // SKILLS TITLES
  const others = document.getElementsByClassName("others-title")[0];
  const langs = document.getElementsByClassName("languages-title")[0];
  others.textContent = locales.skills.others[lng];
  langs.textContent = locales.skills.languages[lng];
  // FINISH SKILLS TITLES
  // ABOUT ME TEXT
  const aboutMeDescriptions = document.getElementsByClassName(
    "about-me-text"
  )[0];
  aboutMeDescriptions.textContent = locales["about me"].text[lng];
  // FINISH ABOUT ME TEXT

  function setLocalesOfClass(classElements, section) {
    for (let i = 0; i < classElements.length; i++) {
      const currentClassElement = classElements[i];
      const titleText = currentClassElement.dataset.text.toLowerCase();
      currentClassElement.textContent = locales[section][titleText][lng];
    }
  }
}

function initialLocalesSetting(lang) {
  if (lang === "en") {
    languageButton.classList.remove("spanish--active");
  } else {
    languageButton.classList.add("spanish--active");
  }
  setLocales(lang);
}

let userLanguage = localStorage.getItem("userLanguage");
if (!userLanguage) {
  userLanguage = navigator.language || navigator.userLanguage;
}

const languageButton = document.getElementById("language-button");

languageButton.addEventListener("click", function () {
  userLanguage = userLanguage === "en" ? "es" : "en";
  localStorage.setItem("userLanguage", userLanguage);
  if (userLanguage === "en") {
    languageButton.classList.remove("spanish--active");
  } else {
    languageButton.classList.add("spanish--active");
  }
  setLocales(userLanguage);
});

initialLocalesSetting(userLanguage);
