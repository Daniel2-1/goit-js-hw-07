const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxSize = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
