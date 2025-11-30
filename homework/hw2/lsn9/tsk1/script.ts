/*
– створити блок,
– додати йому класи wrap, collapse, alpha, beta
– додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
– додати цей блок в body.
– клонувати його повністю, та додати клон в body.
 */

function block(): HTMLDivElement {
    const div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);
    div.innerText = 'Lorem ipsum';
    div.classList.add('wrap', 'collapse', 'alpha', 'beta');
    div.style.color = 'red';
    return div;
}
const org: HTMLDivElement = block();
const clone = org.cloneNode(true);
document.body.append(org, clone);
