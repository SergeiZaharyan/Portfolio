`use strict`;
const stylesheet = document.styleSheets[0];
const btnTaskDone = document.querySelectorAll(".task-cards_btn-done");
const bodyTaskCard = document.querySelector(".task-cards_task");
const btnTaskClean = document.querySelectorAll(".task-cards_btn-clean");
const cardTask = document.querySelector(".list-container_body__task-cards");
const btnAddTask = document.querySelector(".conteiner-input_btn-add");
const btnCleanAll = document.querySelector(".conteiner-input_btn-clean");
const inputTaskAdd = document.querySelector(".conteiner-input_input");
const listContainerBody = document.querySelector(".list-container_body");
const containerTask = [];

btnTaskDone.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(`проверка`);
        event.preventDefault();
  if (element.innerHTML === "ok") {
    element.innerHTML = "done";
    document.styleSheets[0].insertRule(
      ".task-cards_task {text-decoration: line-through;} ",
      stylesheet.cssRules.length
    );
    document.styleSheets[0].insertRule(
      ".list-container_body__task-cards{ display: flex; width: calc( 550 / var(--size-block)) ; justify-content: space-between; margin-top: calc( 5 / var(--size-block)); background: linear-gradient(217deg, rgba(164, 223, 243, 0.8), rgba(164, 252, 179, 0.796) 70.71%);}",
      stylesheet.cssRules.length
    );
  } else {
    element.innerHTML = "ok";
    document.styleSheets[0].insertRule(
      ".task-cards_task {text-decoration: none;} ",
      stylesheet.cssRules.length
    );
    document.styleSheets[0].insertRule(
      ".list-container_body__task-cards{ display: flex; width: calc( 550 / var(--size-block)) ; justify-content: space-between; margin-top: calc( 5 / var(--size-block)); background: linear-gradient(217deg, rgba(164, 223, 243, 0.8), rgba(245, 137, 137, 0.796) 70.71%);}",
      stylesheet.cssRules.length
    );
  }
})});





btnTaskClean.forEach((element, i, arr) => {
    element.addEventListener("click", (event) => {
      console.log(arr[i]);
      arr[i].remove();
      containerTask.splice(1, 1);
    
    
    });
});

function isShowAss() {
  for (let i = 0; i < containerTask.length; i++) {
 let card = document.createElement(`div`);
 card.className = `list-container_body__task-cards`;
 let cardBtnDone = document.createElement(`button`);
 cardBtnDone.className = `task-cards_btn-done`;
 cardBtnDone.innerHTML = `ok`;
 let cardTask = document.createElement(`p`);
 cardTask.className = `task-cards_task`
 cardTask.innerHTML = `${containerTask[i].name}`;
 let cardDelete = document.createElement(`button`);
 cardDelete.className = `task-cards_btn-clean`;
 cardDelete.innerHTML =`x`;
  listContainerBody.append(card);
  card.append(cardBtnDone);
  card.append(cardTask);
  card.append(cardDelete);
  console.log(btnTaskDone);
   
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
console.log(btnTaskDone);

btnTaskDone.forEach((element) => {
    element.addEventListener("click", () => {
  
console.log(btnTaskDone);

  })});
