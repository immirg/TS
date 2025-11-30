"use strict";
let coursesAndDurationArray2 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (const elem of coursesAndDurationArray2) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    p.className = 'description';
    div.classList.add('item');
    h2.innerText = elem.title;
    p.innerText = `${elem.monthDuration}`;
    div.appendChild(h2);
    div.appendChild(p);
    document.body.appendChild(div);
}
//# sourceMappingURL=script.js.map