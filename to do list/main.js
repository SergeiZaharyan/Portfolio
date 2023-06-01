`use strict`;
const stylesheet = document.styleSheets[0];
const bodyTaskCard = document.querySelector(".task-cards_task");
const cardTask = document.querySelector(".list-container_body__task-cards");
const btnAddTask = document.querySelector(".conteiner-input_btn-add");
const btnCleanAll = document.querySelector(".conteiner-input_btn-clean");
const inputTaskAdd = document.querySelector(".conteiner-input_input");
const listContainerBody = document.querySelector(".list-container_body");
let containerTask = [];

function isSetItem() {
  localStorage.setItem("arr", JSON.stringify(containerTask));
  console.log(localStorage.getItem("arr"));
  console.log(containerTask);
}
function isGetItem() {
  const LS = localStorage.getItem("arr");
  const localArray = JSON.parse(LS);
  if (localArray !== containerTask) {
    localArray ? (containerTask = localArray) : false;
    const cards = containerTask
      .map((card) => {
        return generateCardDOM(
          containerTask.indexOf(card) + 1,
          card.text,
          card.state
        );
      })
      .join("");
    listContainerBody.innerHTML = cards;
  }
}

btnCleanAll.addEventListener("click", deleteAllCard);
function deleteAllCard() {
  listContainerBody.innerHTML = "";
  containerTask.splice(0, containerTask.length);
  isSetItem();
  localStorage.removeItem("arr");
}
function createCardInArray(listContainerBody) {
  containerTask.push({
    id: containerTask.length + 1,
    text: inputTaskAdd.value,
    state: "not done",
  });
  const cards = containerTask
    .map((card) => {
      return generateCardDOM(
        containerTask.indexOf(card) + 1,
        card.text,
        card.state
      );
    })
    .join("");
  listContainerBody.innerHTML = cards;
  inputTaskAdd.value = "";
}

const generateCardDOM = (id, text, state) => {
  console.log(state);
  if (state === "not done") {
    return `
    <div class = "list-container_body__task-cards">
    <button class = "task-cards_btn-done">ok</button>
    <p>${id}. ${text}</p>
    <button class = "task-cards_btn-clean">x</button>
    </div>
  `;
  } else {
    return `
    <div class = "list-container_body__task-cards task-cards_btn-done__green">
    <button class = "task-cards_btn-done">done</button>
    <p class = "task-cards_task-done" >${id}. ${text}</p>
    <button class = "task-cards_btn-clean">x</button>
    </div>
  `;
  }
};

function deleteCard(elemDelete) {
  let id = parseInt(elemDelete.querySelector(`p`).innerHTML);
  let indexElementArr = containerTask.indexOf(
    containerTask.find((el) => el.id === id)
  );
  console.log(indexElementArr);
  containerTask.splice(indexElementArr, 1);
  elemDelete.remove();
  const cards = containerTask
    .map((card) => {
      return generateCardDOM(
        containerTask.indexOf(card) + 1,
        card.text,
        card.state
      );
    })
    .join("");
  listContainerBody.innerHTML = cards;
  isSetItem();
}

function isDoneCard(elementDone) {
  elementDone.classList.toggle("task-cards_btn-done__green");
  const cardText = elementDone.querySelector(`p`);
  cardText.classList.toggle("task-cards_task-done");
  const id = parseInt(cardText.innerHTML) - 1;
  console.log(containerTask[id].state);
  containerTask[id].state === "done"
    ? (containerTask[id].state = "not done")
    : (containerTask[id].state = "done");
  console.log(containerTask);

  containerTask[id].state === "done"
    ? (elementDone.querySelector(`button`).innerHTML = "done")
    : (elementDone.querySelector(`button`).innerHTML = "ok");
  isSetItem();
}

listContainerBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-cards_btn-clean")) {
    deleteCard(e.target.parentElement);
  }
  if (e.target.classList.contains("task-cards_btn-done")) {
    isDoneCard(e.target.parentElement);
  }
});
btnAddTask.addEventListener("click", () => {
  createCardInArray(listContainerBody);
  isSetItem();
});
isGetItem();
