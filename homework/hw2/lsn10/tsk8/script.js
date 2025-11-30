"use strict";
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк. При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом
const paramsForInput = [
    {
        type: 'number',
        id: 'lines',
        placeholder: 'count lines',
    },
    {
        type: 'number',
        id: 'cells',
        placeholder: 'count cells',
    },
    {
        type: 'text',
        id: 'textInCells',
        placeholder: 'text for cells'
    },
    {
        type: 'submit',
        id: 'smb',
        value: 'submit'
    }
];
const formParamsForTable = document.createElement('form');
formParamsForTable.id = 'paramsForTable';
const divTableContainer = document.createElement('div');
divTableContainer.id = 'tableContainer';
for (const inputParam of paramsForInput) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.type = inputParam.type;
    input.id = inputParam.id;
    if ('placeholder' in inputParam) {
        input.placeholder = inputParam.placeholder;
    }
    else {
        input.value = inputParam.value;
    }
    div.append(input);
    formParamsForTable.append(div);
}
document.body.append(formParamsForTable, divTableContainer);
const paramTable = document.getElementById('paramsForTable');
if (paramTable) {
    paramTable.addEventListener('submit', (event) => {
        event.preventDefault();
        const lines = document.getElementById('lines');
        const cls = document.getElementById('cells');
        const txtInCls = document.getElementById('textInCells');
        const tableContainer = document.getElementById('tableContainer');
        const countLines = +lines.value;
        const cells = +cls.value;
        const textInCells = txtInCls.value;
        const table = document.createElement('table');
        for (let i = 0; i < countLines; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < cells; j++) {
                const td = document.createElement('td');
                td.textContent = textInCells;
                td.style.height = '25px';
                td.style.width = '50px';
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        tableContainer.innerHTML = '';
        tableContainer.append(table);
    });
}
//# sourceMappingURL=script.js.map