const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// helper function for light and dark mode

function imageView(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
// dark mode design
function darkMode() {
  nav.style.backgroundColor = "rgb( 0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 /50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageView("dark");
}
// ligt mode design
function lightMode() {
  nav.style.backgroundColor = "rgb( 255 255 255 /50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = "light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageView("light");
}
// dynamic change

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}
// Event listener
toggleSwitch.addEventListener("change", switchTheme);

// check out for current theme
const activeTheme = localStorage.getItem("theme");
if (activeTheme) {
  document.documentElement.setAttribute("data-theme", activeTheme);
  if (activeTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
