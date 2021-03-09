function setLocales(lng) {
  // NAV
  const [projectsLink, skillsLink, aboutLink] = document.getElementsByClassName(
    "nav-link"
  );
  projectsLink.textContent = locales.nav.projects[lng];
  skillsLink.textContent = locales.nav.skills[lng];
  aboutLink.textContent = locales.nav["about me"][lng];
  // FINISH NAV

  const { pathname } = window.location;
  const projectName = pathname.substring(10, pathname.length - 1);

  const projectNameHTML = document.getElementsByClassName("project-name")[0];
  const projectDescriptionHTML = document.getElementsByClassName(
    "project-description"
  )[0];
  projectNameHTML.textContent = locales[projectName].header.title[lng];
  projectDescriptionHTML.textContent =
    locales[projectName].header.description[lng];
  const componentDescriptionContainer = document.getElementsByClassName(
    "component-description-container"
  );
  let descriptionTitle = [];
  let descriptionTexts = [];
  for (let i = 0; i < componentDescriptionContainer.length; i++) {
    const children = componentDescriptionContainer[i].children;
    let descriptionArray = [];
    let titlesArray = [];
    for (let j = 0; j < children.length; j++) {
      const childrenValue = children[j];
      if (j === 0) {
        titlesArray.push(childrenValue);
        continue;
      }
      if (childrenValue.classList.contains("component-description-text")) {
        descriptionArray.push(childrenValue);
      }
    }
    descriptionTitle.push(titlesArray);
    descriptionTexts.push(descriptionArray);
    descriptionArray = [];
    titlesArray = [];
  }
  for (let i = 0; i < descriptionTitle.length; i++) {
    const titlesArray = descriptionTitle[i];
    let title;
    if (titlesArray.length === 1) {
      title = titlesArray[0];
      console.log(locales[projectName].body.titles[i][lng]);
      title.innerHTML = locales[projectName].body.titles[i][lng];
      continue;
    }
    titlesArray.forEach((title, index) => {
      title.innerHTML = locales[projectName].body.titles[i][index][lng];
    });
  }
  for (let i = 0; i < descriptionTexts.length; i++) {
    const descriptionArray = descriptionTexts[i];
    let description;
    if (descriptionArray.length === 1) {
      description = descriptionArray[0];
      description.innerHTML = locales[projectName].body.descriptions[i][0][lng];
      continue;
    }
    descriptionArray.forEach((desc, index) => {
      console.log(locales[projectName].body.descriptions);
      desc.innerHTML = locales[projectName].body.descriptions[i][index][lng];
    });
  }
}

let userLanguage = localStorage.getItem("userLanguage");
if (!userLanguage) {
  userLanguage = navigator.language || navigator.userLanguage;
}
userLanguage = userLanguage.substr(0, 2);
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

function initialLocalesSetting(lang) {
  if (lang === "en") {
    languageButton.classList.remove("spanish--active");
  } else {
    languageButton.classList.add("spanish--active");
  }
  setLocales(lang);
}

initialLocalesSetting(userLanguage);
