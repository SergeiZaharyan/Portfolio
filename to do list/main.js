`use strict`;
const stylesheet = document.styleSheets[0];
const bodyTaskCard = document.querySelector(".task-cards_task");
const cardTask = document.querySelector(".list-container_body__task-cards");
const btnAddTask = document.querySelector(".conteiner-input_btn-add");
const btnCleanAll = document.querySelector(".conteiner-input_btn-clean");
const inputTaskAdd = document.querySelector(".conteiner-input_input");
const listContainerBody = document.querySelector(".list-container_body");
const containerTask = [];

function createCardInArray(listContainerBody) {
  containerTask.push({
    id: containerTask.length + 1,
    text: inputTaskAdd.value,
  });
  const cards = containerTask
    .map((card) => {
      return generateCardDOM(card.id, card.text);
    })
    .join("");
  listContainerBody.innerHTML = cards;
}

const generateCardDOM = (id, text) => {
  return `
    <div class = "list-container_body__task-cards">
    <button class = "task-cards_btn-done">ok</button>
    <p class = "task-cards_task">${id}. ${text}</p>
    <button class = "task-cards_btn-clean">x</button>
    </div>
  `;
};

const btnTaskDone = document.querySelectorAll(".task-cards_btn-done");
const btnTaskClean = document.querySelectorAll(".task-cards_btn-clean");

function deleteCard(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".list-container_body__task-cards").remove();
  console.log(listContainerBody.innerHTML);
}
btnTaskClean.forEach((btn) => {
  btn.addEventListener("click", deleteCard);
});

btnAddTask.addEventListener("click", () => {
  createCardInArray(listContainerBody);
});
// const createDeletBtnCard = (addCard) => {

//   const createCleanDOM = document.createElement(`button`);
//   createCleanDOM.className = `task-cards_btn-clean`;
//   createCleanDOM.innerHTML = `x`;
// };

// const createDoneBtnCard = (addCard) => {

//   const createDoneDOM = document.createElement(`button`);
//   createDoneDOM.className = `task-cards_btn-done`;
//   createDoneDOM.innerHTML = `ok`;
// };

//   // Создать карточку и добавить ее в массив и dom тут
//   // ...
//   // Создай кнопки удалить и добавить и сохрани их в массив тоже
//   // Массив итоговый должен выглядеть примерно вот так:
//   /**
//    * [
//    *  {
//    *    html: card,
//    *    text: 'Some text on card',
//    *    done: btnTaskDone,
//    *    clean: btnTaskClean,
//    *  },
//    *  {
//    *   html: card,
//    *   text: 'Blah-blah text',
//    *   done: btnTaskDone,
//    *   clean: btnTaskClean,
//    *  }
//    * ]
//    */

//   /**
//    * Каждый раз когда ты создаешь карточку ты должен записать в массив как саму карточку, так и все принадлежащие ей кнопки.
//    * Тогда при нажатии на кнопку очистки ты сможешь удалить карточку через parentelement, а из массива удалить элемент с помощью поиска по полю 'text'.
//    */

//   // Примерная логика вызова функций:
//   // const card = addCard(text);
//   // const done = createDoneBtnCard(card); // обрати внимание что созданную карточку я передаю в создание кнопок, чтобы они ссылались на карточку
//   // const clean = createDeletBtnCard(card); // так же хэнлдеры для удаления можно навесить после создания элементов

// //   done.addEventListener('click', () => {
// //     findAndDeleteCard(card);
// //   });
// //   clean.addEventListener('click', () => {
// //     findAndCleanCard(card);
// //   });
// // e

// function createCardElement() {
//  // TODO создать карточку в хтмл и добавить в дом
// }

// function createDeleteButtonElement(card) {
//  // TODO создать кнопку удаления внутри карточки и добавить в дом
// }

// function deleteCard(card) {
//  // TODO найти и удалить карточку в массиве
//  // так же удалить карточку в dom (найдешь карточку в массиве)
// }

// function addCard() {
//  const card = createCardElement();
//  const deleteButton = createDeleteButtonElement(card);

//  deleteButton.addEventListener('click', () => {
//   deleteCard(card);
//  });

//  cards.push(card);
// }
