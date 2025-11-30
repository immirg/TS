//  Є масив Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration Завдання робити через цикли.
type coursesArray = {
    title: string;
    monthDuration: number;
}
let coursesAndDurationArray: coursesArray[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i: number = 0; i < coursesAndDurationArray.length; i++) {
    let div: HTMLDivElement = document.createElement('div');
    let p: HTMLParagraphElement = document.createElement('p');
    div.appendChild(p);
    p.innerText = `${coursesAndDurationArray[i]!.title} month duration ${coursesAndDurationArray[i]!.monthDuration}`;
    document.body.appendChild(div);
}
