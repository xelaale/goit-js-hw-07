const btnCreate = document.querySelector('button[data-create]');

btnCreate.addEventListener('click', e => {
  const inputVal = document.querySelector('#controls input');
  const amount = inputVal.value.trim();

  if (amount < 1 || amount > 100) {
    return false;
  }

  inputVal.value = '';
  createBoxes(amount);
});

function createBoxes(amount) {
  const boxesHolder = document.querySelector('#boxes');

  boxesHolder.textContent = '';
  let boxSize = 30;
  const elements = [];

  for (let i = 1; i <= amount; i++) {
    const el = document.createElement('div');
    el.style.backgroundColor = getRandomHexColor();
    el.style.width = `${boxSize}px`;
    el.style.height = `${boxSize}px`;
    elements.push(el);
    boxSize += 10;
  }

  boxesHolder.append(...elements);
}

const btnDestroy = document.querySelector('button[data-destroy]');

btnDestroy.addEventListener('click', () => {
  const boxesHolder = document.querySelector('#boxes');
  boxesHolder.textContent = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
