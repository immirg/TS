"use strict";
/*
Є масив:
[‘Main’, ’Products’, ’About us’, ’Contacts’]
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
 */
let ulArray = document.createElement('ul');
const arr = ['Main', 'Products', 'About us', 'Contacts'];
for (const elem of arr) {
    let li = document.createElement('li');
    li.innerText = elem;
    ulArray.appendChild(li);
}
document.body.appendChild(ulArray);
//# sourceMappingURL=script.js.map