let darkMode = localStorage.getItem("darkMode");
darkMode = darkMode ? JSON.parse(darkMode) : darkMode;
console.log(darkMode);
const body = document.getElementById("body");
const darkModeButton = document.getElementById("darkmode-button");
if (darkMode) {
  body.classList.add("dark-mode");
}
darkModeButton.addEventListener("click", function (e) {
  console.log(darkMode);
  if (darkMode === null) {
    darkMode = true;
    localStorage.setItem("darkMode", true);
    body.classList.add("dark-mode");
    return;
  }
  if (darkMode === false) {
    darkMode = true;
    localStorage.setItem("darkMode", true);
    body.classList.add("dark-mode");
    return;
  } else {
    darkMode = false;
    localStorage.setItem("darkMode", false);
    body.classList.remove("dark-mode");
    return;
  }
});
