// const logger = (time) => console.log("tik");
// const intervalId = setInterval(logger, 2000);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const buttons = document.querySelectorAll("button[data-action]");
const bodeEl = document.querySelector("body");
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let getNumber;
const chooseColor = (colors, getNumber) => {
  bodeEl.style.backgroundColor = colors[getNumber];
};
buttons.forEach((button) => {
  button.addEventListener("click", onBtnClick);
});
let intervalId = null;
let isActive = false;
function onBtnClick(event) {
  const { action } = event.currentTarget.dataset;
  switch (action) {
    case "start":
      if (isActive) {
        console.log("a a");
        return;
      } else {
        isActive = true;
        intervalId = setInterval(() => {
          getNumber = randomIntegerFromInterval(0, colors.length - 1);
          chooseColor(colors, getNumber);
        }, 1000);
      }
      break;
    case "stop":
      console.log("q q");
      clearInterval(intervalId);
      isActive = false;
  }
}
