
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт

let array1: number[] = [1, 0, 3];
localStorage.setItem('arr', JSON.stringify(array1));

const arrFromStorage: string|null = localStorage.getItem('arr')
type bj = {
    title: string,
    price: number,
    madeIn: string
}

if (arrFromStorage) {
    let arr5: object[] = JSON.parse(arrFromStorage);
    let obj5: bj = {title: 'chair', price: 21, madeIn: 'China'};
    arr5.push(obj5);
    localStorage.setItem('arr', JSON.stringify(arr5));
}
