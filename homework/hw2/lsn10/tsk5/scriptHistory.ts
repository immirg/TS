let hst2: string | null = localStorage.getItem('sessionsList');
const divHistory: HTMLDivElement = document.createElement('div');

if (!hst2) {
    const pNoHistory: HTMLParagraphElement = document.createElement('p');
    pNoHistory.innerText = 'No history';
    divHistory.appendChild(pNoHistory);
} else {
    for (const line of JSON.parse(hst2)) {
        const pHistory: HTMLParagraphElement = document.createElement('p');
        pHistory.innerText = line;
        divHistory.appendChild(pHistory);
    }
}
document.body.append(divHistory);
