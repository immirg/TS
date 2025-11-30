// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

// document.write('<div><input type="text" placeholder="name" id="name"></div>');
// document.write('<div><input type="text" placeholder="surname" id="surname"></div>');
// document.write('<div><input type="number" placeholder="age" id="age"></div>');
// document.write('<div><input type="button" value="Submit" id="submit"></div>');

// type vl = [string[], string[], string[], string[]];
type vl = [
    {
        type: string,
        placeholder: string,
        id: string
    },
    {
        type: string,
        placeholder: string,
        id: string
    },
    {
        type: string,
        placeholder: string,
        id: string
    },
    {
        type: string,
        value: string,
        id: string
    }
]
const values: vl = [
    {
        type: "text",
        placeholder: "name",
        id: "name"
    },
    {
        type: "text",
        placeholder: "surname",
        id: "surname"
    },
    {
        type: "text",
        placeholder: "age",
        id: "age"
    },
    {
        type: "button",
        value: "Submit",
        id: "submit"
    }
]
for (const obj of values) {
    const div: HTMLDivElement = document.createElement("div");
    const input: HTMLInputElement = document.createElement("input");
    input.type = obj.type;
    input.id = obj.id;
    if ('placeholder' in obj) {
        input.placeholder = obj.placeholder;
    } else {
        input.value = obj.value;
    }
    div.append(input);
    document.body.append(div);
}
const submitBtn = document.getElementById('submit') as HTMLButtonElement;

if (submitBtn) {
    submitBtn.addEventListener('click', (): void => {
        const p1: HTMLParagraphElement = document.createElement('p');
        const name = document.getElementById('name') as HTMLInputElement;
        p1.innerText = name.value;

        const p2: HTMLParagraphElement = document.createElement('p');
        const surname = document.getElementById('surname') as HTMLInputElement;
        p2.innerText = surname.value;

        const p3: HTMLParagraphElement = document.createElement('p');
        const age = document.getElementById('age') as HTMLInputElement;
        p3.innerText = age.value;

        document.body.append(p1, p2, p3);
    })
}
