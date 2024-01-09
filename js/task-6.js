function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`.buttons-input`);
const boxes = document.querySelector(`.boxes`);
const createBtn = document.querySelector(`.create-btn`);
const destroyBtn = document.querySelector(`.destroy-btn`);

createBtn.addEventListener(`click`, () => {
  destroyBoxes();
  const totalBoxes = input.value;
  createBoxes(totalBoxes);
});

destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const newBoxes = [];
    let size = 30;
    
    for (let i = 0; i < amount; i += 1) {
      const color = getRandomHexColor();
      const newBox = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
      newBoxes.push(newBox);
      size += 10;
    }
    boxes.innerHTML = newBoxes.join('');
    input.value = '';
  }
};

function destroyBoxes() {
  boxes.innerHTML = '';
};