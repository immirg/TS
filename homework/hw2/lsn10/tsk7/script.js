"use strict";
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
let array1 = [1, 0, 3];
localStorage.setItem('arr', JSON.stringify(array1));
const arrFromStorage = localStorage.getItem('arr');
if (arrFromStorage) {
    let arr5 = JSON.parse(arrFromStorage);
    let obj5 = { title: 'chair', price: 21, madeIn: 'China' };
    arr5.push(obj5);
    localStorage.setItem('arr', JSON.stringify(arr5));
}
//# sourceMappingURL=script.js.map