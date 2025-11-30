/*
Є масив:
[‘Main’, ’Products’, ’About us’, ’Contacts’]
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
 */
let ulArray: HTMLUListElement = document.createElement('ul');
const arr: string[] = ['Main', 'Products', 'About us', 'Contacts'];
for (const elem of arr) {
    let li: HTMLLIElement = document.createElement('li');
    li.innerText = elem;
    ulArray.appendChild(li);
}
document.body.appendChild(ulArray);
