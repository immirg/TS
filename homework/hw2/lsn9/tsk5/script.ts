// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

import { coursesArray } from "./arrays-1.js";

type Course = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}

for (const course of coursesArray) {
    const divMain: HTMLDivElement = document.createElement("div");
    const divTitle: HTMLDivElement = document.createElement('div');
    const divMonthDuration: HTMLDivElement = document.createElement("div");
    const divHourDuration: HTMLDivElement = document.createElement("div");
    const divHourDurationTime: HTMLDivElement = document.createElement("div");
    const divModules: HTMLDivElement = document.createElement("div");

    divMain.style.border = '1px solid red';
    divMain.style.margin = '10px';
    divMain.style.width = '95vw';
    divMain.classList.add('flexBlock');

    divTitle.classList.add('course');
    divTitle.style.width = '95%'
    divTitle.innerText = `title: '${course.title}'`;
    divTitle.classList.add('blockParameters');
    divTitle.style.marginTop = '20px';

    divMonthDuration.innerText = `monthDuration: ${course.monthDuration}`;
    divMonthDuration.style.width = '95%'
    divMonthDuration.classList.add('blockParameters');

    divHourDuration.innerText = `hourDuration:`;
    divHourDuration.style.width = '25%'
    divHourDuration.classList.add('blockParameters');

    divHourDurationTime.innerText = `${course.hourDuration}`;
    divHourDurationTime.style.width = '68%'
    divHourDurationTime.classList.add('blockParameters');

    divModules.style.width = '95%';
    divModules.classList.add('divModules');

    divModules.style.marginBottom = '20px';
    for (let module of course.modules) {
        const divModule: HTMLDivElement = document.createElement("div");
        divModule.innerText = module;
        divModule.classList.add('blockParameters');
        divModule.classList.add('divModule');
        divModules.append(divModule);
    }
    divMain.append(divTitle, divMonthDuration, divHourDuration, divHourDurationTime, divModules);
    document.body.appendChild(divMain);
}
