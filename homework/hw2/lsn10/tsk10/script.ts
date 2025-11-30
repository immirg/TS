
// зробити масив на 100 об’єктів та дві кнопки prev next при завантаженні сторінки з’являються перші 10 об’єктів. При натисканні next виводяться наступні 10 об’єктів При натисканні prev виводяться попередні 10 об’єктів

const buttonPrev: HTMLButtonElement = document.createElement('button');
const buttonNext: HTMLButtonElement = document.createElement('button');
buttonPrev.id = 'prev';
buttonNext.id = 'next';
buttonPrev.textContent = 'PREV';
buttonNext.textContent = 'NEXT';
document.body.append(buttonPrev, buttonNext);

let arr50: number[] = [];
for (let i: number = 1; i < 101; i++) {
    arr50.push(i);
}

let start: number = 0;
let end: number = 10;

let divArr: HTMLDivElement = document.createElement('div');
divArr.textContent = String(arr50.slice(0, 10));
document.body.appendChild(divArr);

const nxt = document.getElementById('next') as HTMLButtonElement;
if (nxt) {
    nxt.addEventListener('click', (event: MouseEvent): void => {
        if (end < arr50.length) {
            start += 10;
            end += 10;
        } else {
            start = 0;
            end = 10;
        }
        divArr.innerHTML = '';
        divArr.textContent = String(arr50.slice(start, end));
        document.body.append(divArr);
    });
}
const prv = document.getElementById('prev') as HTMLButtonElement;
if (prv) {
    prv.addEventListener('click', (event: MouseEvent): void => {
        if (start === 0) {
            start = arr50.length - 10;
            end = arr50.length;
        } else {
            start -= 10;
            end -= 10;
        }
        divArr.innerHTML = '';
        divArr.textContent = String(arr50.slice(start, end));
        document.body.append(divArr);
    });
}
