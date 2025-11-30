"use strict";
// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then((json) => {
    // console.log(json);
    for (let recipe of json.recipes) {
        console.log(recipe);
    }
    for (let recipe of json.recipes) {
        // document.write('<div style="border: darkmagenta 1px solid;">')
        // document.write(`
        //     <img src="${recipe.image}" alt="${recipe.name}" height="200">
        //     <p>${recipe.name}</p>
        // `);
        // document.write('<p>ingredients:</p>');
        // document.write('<ul>');
        // for (let ingredient of recipe.ingredients) {
        //     document.write(`<li>${ingredient}</li>`);
        // }
        // document.write('</ul>');
        // document.write('<p>instructions:</p>');
        //
        // document.write('<ul>');
        // for (let i = 0; i < recipe.instructions.length; i++) {
        //     document.write(`<li>${recipe.instructions[i]}</li>`);
        // }
        // document.write('</ul>');
        // document.write('</div>')
        const div = document.createElement('div');
        const img = document.createElement('img');
        const pName = document.createElement('p');
        const pIngredients = document.createElement('p');
        const ulIngredients = document.createElement('ul');
        const pInstructions = document.createElement('p');
        const ulInstructions = document.createElement('ul');
        div.append(img, pName, pIngredients, ulIngredients, pInstructions, ulInstructions);
        for (let ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            li.innerText = `${ingredient}`;
            ulIngredients.appendChild(li);
        }
        for (let i = 0; i < recipe.instructions.length; i++) {
            const li = document.createElement('li');
            li.innerText = `${recipe.instructions[i]}`;
            ulInstructions.appendChild(li);
        }
        div.style.border = 'darkmagenta 1px solid';
        img.src = `${recipe.image}`;
        img.alt = recipe.name;
        img.style.height = '200px';
        pName.innerText = `${recipe.name}`;
        pIngredients.innerText = `ingredients: `;
        pInstructions.innerText = `instructions: `;
        document.body.append(div);
    }
});
//# sourceMappingURL=script.js.map