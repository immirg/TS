"use strict";
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let numberOnPage = document.createElement('p');
let num = 1;
let numForCash = Number(localStorage.getItem('number'));
if (numForCash) {
    num = numForCash + 1;
    localStorage.setItem('number', num.toString());
}
else {
    localStorage.setItem('number', num.toString());
}
numberOnPage.innerText = 'Current value is ' + num;
document.body.append(numberOnPage);
//# sourceMappingURL=script.js.map