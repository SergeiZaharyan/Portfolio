"use strict";
import { isСhangeСolorDark, isСhangeСolorLight } from "./style-script.js";

const buttonLightMode = document.querySelector(
  ".conteiner-dark-mode__btn_color-border1"
);
const buttonDarkMode = document.querySelector(
  ".conteiner-dark-mode__btn_color-border2"
);
let buttonChange = false;

buttonLightMode.addEventListener("click", (event) => {
  event.preventDefault();

  if (buttonChange == !true) {
    isСhangeСolorDark();
    buttonChange = true;
  }
});

buttonDarkMode.addEventListener("click", (event) => {
  event.preventDefault();

  if (buttonChange == !false) {
    isСhangeСolorLight();
    buttonChange = false;
  }
});

const buttonCopy = document.querySelector(".values-conteiner__btn");
const buttonNumber = document.querySelectorAll(".keybord__btn_color");
const buttonOperators = document.querySelectorAll(".keybord__btn_color-red");
const buttonReset = document.querySelectorAll(".keybord__btn_color-aqua");
const innerConteiner = document.querySelector(
  ".values-conteiner__value-string_size"
);
const output = document.getElementById("output");

let a = "";
let b = "";
let c = "";
let d = "";

const equalsButton = () => {
  switch (c) {
    case "+":
      d = parseFloat(a) + parseFloat(b);
      output.innerHTML = d;
      break;

    case "-":
      d = parseFloat(a) - parseFloat(b);
      output.innerHTML = d;
      break;

    case "*":
      d = parseFloat(a) * parseFloat(b);
      output.innerHTML = d;
      break;

    case "/":
      d = parseFloat(a) / parseFloat(b);
      d = Infinity ? (output.innerHTML = 0) : (output.innerHTML = d);
      break;
  }
};

const isChangeOfTransferred = (change) => {
  if (c) {
    b = b + change;
  } else {
    a = a + change;
  }
};

const isChangeOperator = (operator) => {
  switch (operator) {
    case "+":
      c = "+";
      innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`;
      break;

    case "-":
      c = "-";
      innerConteiner.innerHTML = `${a}` + `${c} ` + `${b}`;
      break;

    case "x":
      c = "*";
      innerConteiner.innerHTML = `${a}` + `${`x`}` + `${b}`;
      break;

    case "*":
      c = "*";
      innerConteiner.innerHTML = `${a}` + `${`x`}` + `${b}`;
      break;

    case "÷":
      c = "/";
      innerConteiner.innerHTML = `${a}` + `${`÷`}` + `${b}`;
      break;

    case "/":
      c = "/";
      innerConteiner.innerHTML = `${a}` + `${`÷`} ` + `${b}`;
      break;

    case "=":
      equalsButton();
      break;
  }
};

buttonNumber.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault;
    if (c) {
      (b.includes(".") || b.length === 0) && element.innerHTML === "."
        ? false
        : ((innerConteiner.innerHTML =
            innerConteiner.innerHTML + element.innerHTML),
          isChangeOfTransferred(element.innerHTML));
    } else {
      (a.includes(".") || a.length === 0) && element.innerHTML === "."
        ? false
        : ((innerConteiner.innerHTML =
            innerConteiner.innerHTML + element.innerHTML),
          isChangeOfTransferred(element.innerHTML));
    }
  });
});

buttonReset.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault;
    if (element.innerHTML === "AC") {
      innerConteiner.innerHTML = "";
      a = "";
      b = "";
      c = "";
      d = "";
      output.innerHTML = "";
    } else if (element.innerHTML === "%") {
      d === ""
        ? b === ""
          ? (output.innerHTML = a / 100)
          : ((b = b / 100),
            (innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`))
        : (output.innerHTML = d / 100);
    } else if (element.innerHTML === "±") {
      !d
        ? !b
          ? ((a = -a), (innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`))
          : ((b = -b), (innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`))
        : (d = d * -1),
        (output.innerHTML = d);
    } else if (element.innerHTML !== "±" && "%" && "AC") {
      d.toString().length > 0
        ? ((d = d.toString().slice(0, -1)), (output.innerHTML = d))
        : b.toString().length > 0
        ? ((b = b.toString().slice(0, -1)),
          (innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`))
        : c.toString().length > 0
        ? ((c = c.toString().slice(0, -1)),
          (innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`))
        : ((a = a.toString().slice(0, -1)),
          (innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`));
    }
  });
});

buttonOperators.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault;
    isChangeOperator(element.innerHTML);
  });
});
document.addEventListener("keyup", asd);
function asd(e) {
  e.preventDefault;

  isNaN(parseFloat(e.key)) === false
    ? (isChangeOfTransferred(e.key),
      (innerConteiner.innerHTML = innerConteiner.innerHTML + e.key))
    : e.key === "-" || "+" || "=" || "x" || "*Shift" || "÷" || "/"
    ? isChangeOperator(e.key)
    : false;
}

const dot = document.querySelector("#dot");

const alertCopy = document.querySelector(".alert-copy");
buttonCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerHTML);
  alertCopy.classList.remove("off");
  setTimeout(() => {
    alertCopy.classList.add("off");
  }, 500);
});
