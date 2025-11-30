"use strict";
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
const values = [
    {
        type: "text",
        placeholder: "name",
        id: "name"
    },
    {
        type: "text",
        placeholder: "surname",
        id: "surname"
    },
    {
        type: "text",
        placeholder: "age",
        id: "age"
    },
    {
        type: "button",
        value: "Submit",
        id: "submit"
    }
];
for (const obj of values) {
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.type = obj.type;
    input.id = obj.id;
    if ('placeholder' in obj) {
        input.placeholder = obj.placeholder;
    }
    else {
        input.value = obj.value;
    }
    div.append(input);
    document.body.append(div);
}
const submitBtn = document.getElementById('submit');
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const p1 = document.createElement('p');
        const name = document.getElementById('name');
        p1.innerText = name.value;
        const p2 = document.createElement('p');
        const surname = document.getElementById('surname');
        p2.innerText = surname.value;
        const p3 = document.createElement('p');
        const age = document.getElementById('age');
        p3.innerText = age.value;
        document.body.append(p1, p2, p3);
    });
}
//# sourceMappingURL=script.js.map