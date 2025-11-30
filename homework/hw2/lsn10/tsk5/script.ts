// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

const hst1: string | null = localStorage.getItem('sessionsList');

const time: Date = new Date();
const data: Date[] = [time];

if (!hst1) {
    localStorage.setItem('sessionsList', JSON.stringify(data));
} else {
    let arr: string[] = JSON.parse(hst1);
    arr.push(time.toISOString());
    localStorage.setItem('sessionsList', JSON.stringify(arr));
}

