'use strict'
const buttonLightMode = document.querySelector(".conteiner-dark-mode__btn_color-border1");
const buttonDarkMode = document.querySelector(".conteiner-dark-mode__btn_color-border2");
let buttonChange = false;
buttonLightMode.addEventListener('click', (event) => {
event.preventDefault();
const stylesheet = document.styleSheets[0];
if(buttonChange ==! true) {
    
function isСhangeСolor () {
    
    stylesheet.insertRule(`:root {  --color-button: #f7f7f9; --color-background: #fff; 
    --color-font: #000; --color-background-keyboard:#f9f9f9; --color-button-active: #dbdbdb; 
    --color-button-light-off: #000; --color-button-light-on: #e4e4e4;
    }`, stylesheet.cssRules.length);

};
isСhangeСolor ();
buttonChange = true;
console.log(buttonChange);
};});

buttonDarkMode.addEventListener('click', (event) => {
    event.preventDefault();
    const stylesheet = document.styleSheets[0];
    if(buttonChange ==! false) {
        
    function isСhangeСolor () {
        
        stylesheet.insertRule(`:root {  --color-button: ##272b35; --color-background: #000; 
        --color-font: #fff; --color-background-keyboard:#292d38; --color-button-active: #4e4f51; 
        --color-button-light-off: #6c707b; --color-button-light-on: #d2d4d4;
        }`, stylesheet.cssRules.length);
    
    };
    isСhangeСolor ();
    buttonChange = false;
    };});

    const buttonNumber = document.querySelectorAll(".keybord__btn_color");
    const buttonOperators = document.querySelectorAll(".keybord__btn_color-red");

    const buttonReset = document.querySelector(".keybord__btn_color-aqua");

    console.log(buttonNumber);
    const innerConteiner = document.querySelector(".values-conteiner__value-string_size");
    const outputConteiner = document.getElementById("output");
//     let arr=[{  operand1: '',
//                 operator: '', 
//                 operand2: ''
//     },];
//     for (const numbers of buttonNumber) {
        
//     numbers.addEventListener('click', (event) => {
// event.preventDefault();
// console.log(numbers);
// let innerResult = arr[0].operand1 + numbers.innerHTML;
// arr[0].operand1 = innerResult;
// console.log(innerResult);
// innerConteiner.innerHTML =`${innerResult}`;

//     })}
let innerResult;

buttonNumber.forEach(element => { 
    element.addEventListener('click', (event) =>{
        event.preventDefault;
        innerConteiner.innerHTML = innerConteiner.innerHTML + element.innerHTML ;
        // innerConteiner.innerHTML =`${innerResult}`;

    })
    
});
 buttonReset.addEventListener('click', (event) => {
        event.preventDefault;
        innerConteiner.innerHTML ='';
        outputConteiner.innerHTML='0';
 });

 let operator = buttonOperators.forEach(element => {
        element.addEventListener('click', (event) =>{
        event.preventDefault;
        console.log(element.innerHTML);
        switch(element.innerHTML){
            case '+': 
            innerConteiner.innerHTML = innerConteiner.innerHTML + ' + ';
     
            break;
        
            case '-': 
            innerConteiner.innerHTML = innerConteiner.innerHTML + ' - ';
            break;
    
            case 'x': 
            innerConteiner.innerHTML = innerConteiner.innerHTML + ' * ';
            break;
    
            case '÷': 
            innerConteiner.innerHTML = innerConteiner.innerHTML + ' / ';
            break;
    
            case '=': 
            outputConteiner.innerHTML = eval(innerConteiner.innerHTML).toFixed(3);
            break;
        };
    })});
    
    