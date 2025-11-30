"use strict";
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// document.write('<input type="number" id="kg" placeholder="enter kg">');
const inputKg = document.createElement('input');
inputKg.type = 'number';
inputKg.id = 'kg';
inputKg.placeholder = 'enter kg';
document.body.append(inputKg);
const kg = document.getElementById('kg');
if (kg) {
    kg.addEventListener('input', () => {
        const kgInLb = document.getElementById('kg_in_lb');
        if (kgInLb) {
            kgInLb.remove();
        }
        const kgValue = Number(kg.value);
        let p = document.createElement('p');
        console.log(kgValue);
        p.id = 'kg_in_lb';
        p.innerText = (kgValue * 2.20462).toFixed(2) + ' lb';
        document.body.append(p);
    });
}
//# sourceMappingURL=script.js.map