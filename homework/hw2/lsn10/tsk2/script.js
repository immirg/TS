"use strict";
// створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
const inputNum = document.createElement("input");
inputNum.type = "number";
inputNum.id = "user_age";
inputNum.placeholder = "enter your age here";
const inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "Submit";
inputSubmit.id = "submit_button";
document.body.append(inputNum, inputSubmit);
const submitButton = document.getElementById('submit_button');
if (submitButton) {
    submitButton.addEventListener('click', () => {
        if (+document.getElementById('user_age').value >= 18) {
            console.log('Your are over 18 years old.');
        }
        else {
            console.log('Your are under 18 years old.');
        }
    });
}
//# sourceMappingURL=script.js.map