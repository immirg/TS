// Є масив За допомоги скріпта для кожного елементу масиву зробити <div class=’item’>, в якому буде <h1 class=’heading’> з title елементу, та <p class=’description’> з monthDuration елементу. Завдання робити через цикли.
type crsArray = {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray2: crsArray[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const elem of coursesAndDurationArray2) {
    const div: HTMLDivElement = document.createElement('div');
    const h2: HTMLHeadingElement = document.createElement('h2');
    const p: HTMLParagraphElement = document.createElement('p');
    p.className = 'description';
    div.classList.add('item');
    h2.innerText = elem.title;
    p.innerText = `${elem.monthDuration}`;
    div.appendChild(h2);
    div.appendChild(p);
    document.body.appendChild(div);
}
