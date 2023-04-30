`use strict`;
const stylesheet = document.styleSheets[0];
const bodyTaskCard = document.querySelector(".task-cards_task");
const cardTask = document.querySelector(".list-container_body__task-cards");
const btnAddTask = document.querySelector(".conteiner-input_btn-add");
const btnCleanAll = document.querySelector(".conteiner-input_btn-clean");
const inputTaskAdd = document.querySelector(".conteiner-input_input");
const listContainerBody = document.querySelector(".list-container_body");
const containerTask = [];

function isShowAss() {
  for (let i = 0; i < containerTask.length; i++) {
    let card = document.createElement(`div`);
    card.className = `list-container_body__task-cards`;
    let cardBtnDone = document.createElement(`button`);
    cardBtnDone.className = `task-cards_btn-done`;
    cardBtnDone.innerHTML = `ok`;
    let cardTask = document.createElement(`p`);
    cardTask.className = `task-cards_task`;
    cardTask.innerHTML = `${containerTask[i].name}`;
    let cardDelete = document.createElement(`button`);
    cardDelete.className = `task-cards_btn-clean`;
    cardDelete.innerHTML = `x`;
    listContainerBody.append(card);
    card.append(cardBtnDone);
    card.append(cardTask);
    card.append(cardDelete);
    const btnTaskDone = document.querySelector(".task-cards_btn-done");
    const btnTaskClean = document.querySelectorAll(".task-cards_btn-clean");

    btnTaskClean.forEach((element, i, arr) => {
      element.addEventListener("click", (e) => {
        e.preventDefault;
        console.log(arr);
        arr[i].parentElement.remove();
        containerTask.splice(i, 1);
      });
    });
    for (let elem of btnTaskDone) {
      elem.addEventListener("click", (e) => {
        e.preventDefault;
        if (elem.innerHTML === "ok") {
          elem.innerHTML = "done";
        } else if (elem.innerHTML === "done") {
          elem.innerHTML = "ok";
        }
        console.log(elem);
      });
    }

    //   btnTaskDone.forEach((element, i, arr) => {
    //     element.addEventListener("click", (e) => {
    //       e.preventDefault;
    //       console.log(arr);

    //   if (element.innerHTML === "ok") {
    //     element.innerHTML = "done";

    //   } else  if (element.innerHTML === "done"){
    //     element.innerHTML = "ok";
    //  };})});
  }
}

btnAddTask.addEventListener("click", () => {
  containerTask.unshift({
    id: containerTask.length + 1,
    name: inputTaskAdd.value,
    done: "no",
  });
  console.log(containerTask);
  listContainerBody.replaceChildren();
  isShowAss();
});
isShowAss();
