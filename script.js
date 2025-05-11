function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mult(a, b) { return a * b; }
function divi(a, b) { return a / b; }

let numA;
let numB;
let opr;
let curEquation = "";

function operate(numA, numB, opr) {
    if (opr === "+") {
        return add(numA, numB);
    } else if (opr === "-") {
        return sub(numA, numB);
    } else if (opr === "*") {
        return mult(numA, numB);
    } else {
        return divi(numA, numB);
    }
}

//button mapping
const display = document.getElementById("display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("thr");
const four = document.getElementById("fou");
const five = document.getElementById("fiv");
const six = document.getElementById("six");
const sev = document.getElementById("sev");
const eight = document.getElementById("eig");
const nine = document.getElementById("nin");
const zero = document.getElementById("zer");
const addition = document.getElementById("add");
const subtract = document.getElementById("sub");
const multiply = document.getElementById("mult");
const divide = document.getElementById("divi");
const equals = document.getElementById("equ");
const clear = document.getElementById('ac');

//button interactions
one.addEventListener("click", () => {
    curEquation += "1";
    display.textContent = curEquation;
});
two.addEventListener("click", () => {
    curEquation += "2";
    display.textContent = curEquation;
});
three.addEventListener("click", () => {
    curEquation += "3";
    display.textContent = curEquation;
});
four.addEventListener("click", () => {
    curEquation += "4";
    display.textContent = curEquation;
});
five.addEventListener("click", () => {
    curEquation += "5";
    display.textContent = curEquation;
});
six.addEventListener("click", () => {
    curEquation += "6";
    display.textContent = curEquation;
});
sev.addEventListener("click", () => {
    curEquation += "7";
    display.textContent = curEquation;
});
eight.addEventListener("click", () => {
    curEquation += "8";
    display.textContent = curEquation;
});
nine.addEventListener("click", () => {
    curEquation += "9";
    display.textContent = curEquation;
});
zero.addEventListener("click", () => {
    curEquation += "0";
    display.textContent = curEquation;
});
addition.addEventListener("click", () => {
    let splitted = curEquation.split(/([+\-*&])/);
    if (splitted.length === 3) {
        numA = Number(splitted[0]);
        opr = splitted[1];
        numB = Number(splitted[2]);
        curEquation = operate(numA, numB, opr) + "+";
        display.textContent = curEquation;
    } else {
        curEquation += "+";
        display.textContent = curEquation;
    }
});
subtract.addEventListener("click", () => {
    let splitted = curEquation.split(/([+\-*&])/);
    if (splitted.length === 3) {
        numA = Number(splitted[0]);
        opr = splitted[1];
        numB = Number(splitted[2]);
        curEquation = operate(numA, numB, opr) + "-";
        display.textContent = curEquation;
    } else {
        curEquation += "-";
        display.textContent = curEquation;
    }
});
multiply.addEventListener("click", () => {
    let splitted = curEquation.split(/([+\-*&])/);
    if (splitted.length === 3) {
        numA = Number(splitted[0]);
        opr = splitted[1];
        numB = Number(splitted[2]);
        curEquation = operate(numA, numB, opr) + "*";
        display.textContent = curEquation;
    } else {
        curEquation += "*";
        display.textContent = curEquation;
    }
});
divide.addEventListener("click", () => {
    let splitted = curEquation.split(/([+\-*&])/);
    if (splitted.length === 3) {
        numA = Number(splitted[0]);
        opr = splitted[1];
        numB = Number(splitted[2]);
        curEquation = operate(numA, numB, opr) + "&";
        display.textContent = curEquation;
    } 
    else {
        curEquation += "&";
        display.textContent = curEquation;
    }
});
equals.addEventListener("click", () => {
    let splitted = curEquation.split(/([+\-*&])/);
    if (splitted.length === 3) {
        numA = Number(splitted[0]);
        opr = splitted[1];
        numB = Number(splitted[2]);
        display.textContent = operate(numA, numB, opr);
        curEquation = ""
    } 
    else { }
});
clear.addEventListener("click", () => {
    curEquation = "";
    display.textContent = curEquation;
});




