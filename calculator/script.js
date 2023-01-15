'use strict'
import {isСhangeСolorDark, isСhangeСolorLight} from './style-script.js';

const buttonLightMode = document.querySelector(".conteiner-dark-mode__btn_color-border1");
const buttonDarkMode = document.querySelector(".conteiner-dark-mode__btn_color-border2");
let buttonChange = false;

buttonLightMode.addEventListener('click', (event) => {
    event.preventDefault();

    if(buttonChange ==! true) {
        isСhangeСolorDark ();
        buttonChange = true;
    };
});

buttonDarkMode.addEventListener('click', (event) => {
    event.preventDefault();

    if(buttonChange ==! false) { 
        isСhangeСolorLight ();
        buttonChange = false;
    };});

    const buttonCopy = document.querySelector('.values-conteiner__btn');
    const buttonNumber = document.querySelectorAll(".keybord__btn_color");
    const buttonOperators = document.querySelectorAll(".keybord__btn_color-red");
    const buttonReset = document.querySelector(".keybord__btn_color-aqua");
    const innerConteiner = document.querySelector(".values-conteiner__value-string_size");
    const output = document.getElementById("output");
    const equals = document.getElementById("equals");

    let a = "";
    let b = "";
    let c = "";
        
    const equalsButton = () => {
        switch(c) {
            case '+':
                c = parseFloat(a) + parseFloat(b);
                output.innerHTML = c;
                break;
        
            case '-': 
                c = parseFloat(a) - parseFloat(b);
                output.innerHTML = c;
                break;
    
            case '*': 
                c = parseFloat(a) * parseFloat(b);
                output.innerHTML = c;
                break;
    
            case '/': 
                c = parseFloat(a) / parseFloat(b);
                output.innerHTML = c;
                break;
        };
    };   

    const isChangeOfTransferred = (change) => {
        if(c) {
            b = b + change ;
        } else{
            a = a + change ;
        };
    };

    const isChangeOperator = (operator) => {
        switch(operator) {
            
        case '+': 
            c = '+';
            innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`;
            break;
    
        case '-': 
            c = '-';
            innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`;
            break;
    
        case 'x': 
            c = '*';
            innerConteiner.innerHTML = `${a}` + `${`x`}` + `${b}`;
            break;
    
        case '*': 
            c = '*';
            innerConteiner.innerHTML = `${a}` + `${`x`}` + `${b}`;
            break;
    
        case '÷': 
            c = '/';
            innerConteiner.innerHTML = `${a}` + `${`÷`}` + `${b}`;
            break;
    
        case '/':
            c = '/';
            innerConteiner.innerHTML = `${a}` + `${`÷`}` + `${b}`;
            break;
    
        case '=':
            equalsButton();
            break;
    };}

        buttonNumber.forEach(element => { 
        element.addEventListener('click', (event) =>{
        event.preventDefault;
        innerConteiner.innerHTML = innerConteiner.innerHTML + element.innerHTML;
        isChangeOfTransferred(element.innerHTML);
    
    });
});


buttonReset.addEventListener('click', (event) => {
    event.preventDefault;

    innerConteiner.innerHTML ='';
    a = "";
    b = "";
    c = "";
    output.innerHTML = "";
});

buttonOperators.forEach(element => {
    element.addEventListener('click', (event) =>{
        event.preventDefault;
        isChangeOperator(element.innerHTML);

    });
});
document.addEventListener('keyup', asd);
function asd (e) {
    e.preventDefault;

    isNaN(parseFloat(e.key)) === false ? 
    (isChangeOfTransferred(e.key), innerConteiner.innerHTML = innerConteiner.innerHTML + e.key) :
    (e.key === "-" || "+" || "=" || "x" || "*Shift" || "÷" || "/") ? isChangeOperator(e.key) : false;
};

buttonCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(output.innerHTML);
});
