`use strict`;
const bodyTaskCard = document.querySelector(".task-cards_task");
const cardTask = document.querySelector(".list-container_body__task-cards");
const btnAddTask = document.querySelector(".conteiner-input_btn-add");
const btnCleanAll = document.querySelector(".conteiner-input_btn-clean");
const inputTaskAdd = document.querySelector(".conteiner-input_input");
const listContainerBody = document.querySelector(".list-container_body");
let containerTask = [];
let i = 0;
 function createCard (id, text, state) {

    const div = document.createElement("div");
    if(state === "not done"){
    div.className = "list-container_body__task-cards";}
    else{
        div.className = "task-cards_btn-done__green";
    };
    div.setAttribute("data-id", Date.now())
    const p = document.createElement("p");
    p.innerHTML = text;
    const btnDone = document.createElement("button");
   
    const btnClean = document.createElement("button");
    div.className = "list-container_body__task-cards";
    btnClean.className = "task-cards_btn-clean";
    btnClean.innerHTML = "X"
    btnDone.className = "task-cards_btn-done";
btnDone.innerHTML = "ok";
div.append(btnDone, p, btnClean);
listContainerBody.append(div);
const btnDoneCard = document.querySelectorAll(".task-cards_btn-done");
btnDoneCard.forEach(e => { e.addEventListener("click", () =>{
    console.log(e.parentElement.dataset.id)
isDoneCard()
})

});
btnClean.querySelector("click", () =>{


})
 }
 function isDoneCard (){
     console.log("done");
 }
 createCard ();
 createCard ()
 createCard ()