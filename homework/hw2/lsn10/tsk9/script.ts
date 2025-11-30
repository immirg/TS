
// подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн” при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього. ' При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let balance: number = 1000;
const timeTsk9: number = new Date().getTime();

if (localStorage.getItem('balance')) {
    const userBalanceFromCash : string|null = localStorage.getItem('balance');
    const userTimeCash: string|null = localStorage.getItem('balance');
    let balanceFromCash: number = 0;
    let timeFromCash: number = 0;
    if (userBalanceFromCash) {
        balanceFromCash = +JSON.parse(userBalanceFromCash)[0];
    }
    if (userTimeCash) {
        timeFromCash = +JSON.parse(userTimeCash)[1];
        console.log(timeFromCash);
    }
    console.log(timeTsk9);
    if (timeTsk9 - timeFromCash >= 10000) {
        balanceFromCash += 10;
        localStorage.setItem('balance', JSON.stringify([balanceFromCash, timeFromCash]));
        console.log('The balance has been updated. New balance: ' + balanceFromCash);
    } else {
        console.log('less than 10 seconds have passed');
    }
} else {
    localStorage.setItem('balance', JSON.stringify([balance, timeTsk9]));
}
