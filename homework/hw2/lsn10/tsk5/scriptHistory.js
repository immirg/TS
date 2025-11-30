"use strict";
let hst2 = localStorage.getItem('sessionsList');
const divHistory = document.createElement('div');
if (!hst2) {
    const pNoHistory = document.createElement('p');
    pNoHistory.innerText = 'No history';
    divHistory.appendChild(pNoHistory);
}
else {
    for (const line of JSON.parse(hst2)) {
        const pHistory = document.createElement('p');
        pHistory.innerText = line;
        divHistory.appendChild(pHistory);
    }
}
document.body.append(divHistory);
//# sourceMappingURL=scriptHistory.js.map