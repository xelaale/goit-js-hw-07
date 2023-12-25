
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const showColor = document.querySelector(".widget .color");

button.addEventListener("click", e => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  showColor.textContent = color;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
