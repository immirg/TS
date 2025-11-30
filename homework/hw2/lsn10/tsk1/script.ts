// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”

const h1: HTMLHeadingElement = document.createElement('h1');
h1.innerText = 'Document';
h1.id = 'text';

const button: HTMLButtonElement = document.createElement('button');
button.innerText = 'BUTTON';
button.id = 'btn_1';
document.body.append(h1, button);

const btn1 = document.getElementById('btn_1') as HTMLButtonElement;
if (btn1) {
    btn1.addEventListener('click', (): void => {
        const txt = document.getElementById('text') as HTMLInputElement;
        if (txt) {
            txt.style.display = 'none';
        }
    });
}
