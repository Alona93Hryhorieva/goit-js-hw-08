// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('#controls input[type="number"]');
btnCreate.addEventListener('click', () => {
  createBoxes();
});
btnDestroy.addEventListener('click', () => {
 destroyBoxes();
});

const fragment = document.createDocumentFragment();

function createBoxes() {
 destroyBoxes();
  const inputNumber = Number(input.value);
  let sizeBox = 30;

  if (inputNumber > 0 && inputNumber <= 100) {
    for (let i = 0; i < inputNumber; i++) {
      const box = document.createElement('div');
      sizeBox += 10;
      box.style.width = `${sizeBox}px`;
      box.style.height = `${sizeBox}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
    boxesContainer.appendChild(fragment);
  }
  input.value = '';
};

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}