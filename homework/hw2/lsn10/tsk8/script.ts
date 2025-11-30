
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк. При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом

type inputParams = { type: string, id: string, placeholder: string} | { type: string, id: string, value: string}
const paramsForInput: inputParams[] = [
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
const formParamsForTable: HTMLFormElement = document.createElement('form');
formParamsForTable.id = 'paramsForTable';
const divTableContainer: HTMLDivElement = document.createElement('div');
divTableContainer.id = 'tableContainer';

for (const inputParam of paramsForInput) {
    const div: HTMLDivElement = document.createElement('div');
    const input: HTMLInputElement = document.createElement('input');
    input.type = inputParam.type;
    input.id = inputParam.id;
    if ('placeholder' in inputParam) {
        input.placeholder = inputParam.placeholder;
    } else {
        input.value = inputParam.value;
    }
    div.append(input);
    formParamsForTable.append(div);
}

document.body.append(formParamsForTable, divTableContainer);

const paramTable = document.getElementById('paramsForTable') as HTMLFormElement;
if (paramTable) {
    paramTable.addEventListener('submit', (event: SubmitEvent): void => {
        event.preventDefault();
        const lines = document.getElementById('lines') as HTMLInputElement;
        const cls = document.getElementById('cells') as HTMLInputElement;
        const txtInCls = document.getElementById('textInCells') as HTMLInputElement;
        const tableContainer = document.getElementById('tableContainer') as HTMLDivElement;

        const countLines: number = +lines.value;
        const cells: number = +cls.value;
        const textInCells: string = txtInCls.value;

        const table: HTMLTableElement = document.createElement('table');

        for (let i: number = 0; i < countLines; i++) {
            const tr: HTMLTableRowElement = document.createElement('tr');
            for (let j: number = 0; j < cells; j++) {
                const td: HTMLTableCellElement = document.createElement('td');
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
