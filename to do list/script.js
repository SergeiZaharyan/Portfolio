`use strict`;
const bodyTaskCard = document.querySelector(".task-cards_task");
const cardTask = document.querySelector(".list-container_body__task-cards");
const btnAddTask = document.querySelector(".conteiner-input_btn-add");
const btnCleanAll = document.querySelector(".conteiner-input_btn-clean");
const inputTaskAdd = document.querySelector(".conteiner-input_input");
const listContainerBody = document.querySelector(".list-container_body");
const notification = document.querySelector(
  ".list-container_header__notification"
);
let containerTask = new Array();

function generateDOM() {
  listContainerBody.innerHTML = "";
  containerTask.push({
    id: Date.now(),
    text: inputTaskAdd.value,
    state: "not done",
  });

  containerTask.map((card) => {
    createCard(card.id, card.text, card.state);
  });

  inputTaskAdd.value = "";
  isSetItem();
}
function createCard(id, text, state) {
  const div = document.createElement("div");

  div.setAttribute("data-id", id);
  const p = document.createElement("p");
  p.innerHTML = text;
  const btnDone = document.createElement("button");

  const btnClean = document.createElement("button");
  div.className = "list-container_body__task-cards";
  btnClean.className = "task-cards_btn-clean";
  btnClean.innerHTML = "X";
  btnDone.className = "task-cards_btn-done";
  btnDone.innerHTML = "ok";
  if (state === "not done") {
    div.className = "list-container_body__task-cards";
  } else {
    div.className =
      "list-container_body__task-cards task-cards_btn-done__green";
    btnDone.innerHTML = "done";
  }
  div.append(btnDone, p, btnClean);
  listContainerBody.append(div);

  btnDone.addEventListener("click", () => {
    console.log(btnDone.parentElement.dataset.id, btnDone.parentElement);
    isDoneCard(btnDone.parentElement, btnDone.parentElement.dataset.id);
  });

  btnClean.addEventListener("click", () => {
    isCleanCard(btnClean.parentElement, btnClean.parentElement.dataset.id);
  });
  console.log(containerTask.length)
  if (containerTask.length > 3) {
    notification.innerHTML = "The heat has gone";
  }
  if (containerTask.length > 7) {
    notification.innerHTML = "It's tough";
  }
  if (containerTask.length > 10) {
    notification.innerHTML = "Are you serious?";
  }
  if (containerTask.length > 10) {
    notification.innerHTML = "It's impossible";
  }
}
function isCleanCard(elementClean, elemId) {
  console.log(elementClean.dataset.id);
  let cardIdInArr;
  containerTask.find((elem, index) => {
    if (elem.id === Number(elemId)) {
      return (cardIdInArr = index);
    }
  });
  console.log(cardIdInArr);
  console.log(elementClean.parentElement);
  console.log(
    listContainerBody.querySelector(`div[data-id="${elementClean.dataset.id}"]`)
  );
  listContainerBody
    .querySelector(`div[data-id="${elementClean.dataset.id}"]`)
    .remove();
  containerTask.splice(cardIdInArr, 1);
  console.log(containerTask);

  listContainerBody.innerHTML = "";
  containerTask.map((card) => {
    createCard(card.id, card.text, card.state);
    isSetItem();
  });
}
function isDoneCard(elementDone, elemId) {
  let cardIdInArr;
  containerTask.find((elem, index) => {
    if (elem.id === Number(elemId)) {
      return (cardIdInArr = index);
    }
  });
  elementDone.classList.toggle("task-cards_btn-done__green");
  const cardText = elementDone.querySelector(`p`);
  cardText.classList.toggle("task-cards_task-done");
  console.log(cardIdInArr);
  containerTask[cardIdInArr].state === "done"
    ? (containerTask[cardIdInArr].state = "not done")
    : (containerTask[cardIdInArr].state = "done");
  console.log(containerTask);
  containerTask[cardIdInArr].state === "done"
    ? (elementDone.querySelector(`button`).innerHTML = "done")
    : (elementDone.querySelector(`button`).innerHTML = "ok");
  isSetItem();
}
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
    console.log(containerTask);
    containerTask
      .map((card) => {
        createCard(card.id, card.text, card.state);
      })
      .join("");
  }
}
btnAddTask.addEventListener("click", () => {
  generateDOM();
});
btnCleanAll.addEventListener("click", () => {
  listContainerBody.innerHTML = "";
  containerTask = [];
  isSetItem();
});
isGetItem();
