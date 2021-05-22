// const logger = (time) => console.log("tik");
// const intervalId = setInterval(logger, 2000);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodeEl = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const getNumber = randomIntegerFromInterval(0, 5);
const chooseColor = (colors, getNumber) => {
  bodeEl.style.backgroundColor = colors[getNumber];
};
chooseColor(colors, getNumber);
