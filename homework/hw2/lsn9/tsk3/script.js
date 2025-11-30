"use strict";
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    div.appendChild(p);
    p.innerText = `${coursesAndDurationArray[i].title} month duration ${coursesAndDurationArray[i].monthDuration}`;
    document.body.appendChild(div);
}
//# sourceMappingURL=script.js.map