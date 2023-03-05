// Declarations and Initialization
let event_sec = document.querySelector("#event-sec");
const margin = 506.333;
let count = 0;
let menu_image = document.querySelector("#menu-img");
let themeBtn = document.querySelector("#theme-btn");
let themeIcon = document.querySelector("#theme");
let input = Array.from(document.querySelectorAll("input"));
let textArea = Array.from(document.querySelectorAll("textarea"));
let container = Array.from(document.querySelectorAll(".container"));
let changecolor = Array.from(document.querySelectorAll(".changecolor"));

event_sec.style.marginLeft = 0;

// Events Gallery Swiper
setInterval(() => {
  event_sec.style.marginLeft = `${margin * count}px`;
  let divElement;
  for (let imageCount = 0; imageCount < 3; imageCount++) {
    divElement = document.createElement("div");
    event_sec.appendChild(divElement);
    divElement.innerHTML = `<div class="event"><img src="./assets/events-${
      imageCount + 1
    }.jpg" alt=""></div>`;
  }
  --count;
}, 3000);

// Light Theme Defination
const lightTheme = () => {
  theme.classList.remove("bi-sun-fill");
  theme.classList.add("bi-moon-fill");
  container.forEach((element) => {
    element.style.background = "white";
  });
  changecolor.forEach((element) => {
    element.style.color = "black";
    element.style.color = "black";
  });
  input.forEach((element) => {
    element.style.caretColor = "black";
    element.style.color = "black";
  });
  textArea[0].style.caretColor = "black";
};

// Dark Theme Defination
const darkTheme = () => {
  theme.classList.remove("bi-moon-fill");
  theme.classList.add("bi-sun-fill");
  container.forEach((element) => {
    element.style.background = "#141414";
  });
  changecolor.forEach((element) => {
    element.style.color = "white";
  });
  input.forEach((element) => {
    element.style.caretColor = "white";
    element.style.color = "white";
  });
  textArea[0].style.caretColor = "white";
};

// Event Listener on Theme Button
themeBtn.addEventListener("click", () => {
  // console.log(document.querySelector('#theme').classList.contains('bi-moon-fill'));
  themeIcon.classList.contains("bi-moon-fill") ? darkTheme() : lightTheme();
});
