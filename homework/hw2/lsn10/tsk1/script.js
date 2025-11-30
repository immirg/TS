"use strict";
// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”
const h1 = document.createElement('h1');
h1.innerText = 'Document';
h1.id = 'text';
const button = document.createElement('button');
button.innerText = 'BUTTON';
button.id = 'btn_1';
document.body.append(h1, button);
const btn1 = document.getElementById('btn_1');
if (btn1) {
    btn1.addEventListener('click', () => {
        const txt = document.getElementById('text');
        if (txt) {
            txt.style.display = 'none';
        }
    });
}
//# sourceMappingURL=script.js.map