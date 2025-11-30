
// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

type Recipes = {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    "servings": number,
    "difficulty": string,
    "cuisine": string,
    "caloriesPerServing": number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

type ListOfRecipes = {
    recipes: Recipes[],
    total: number,
    skip: number,
    limit: number
}

fetch('https://dummyjson.com/recipes')
    .then((response: Response): Promise<ListOfRecipes> => response.json())
    .then((json: ListOfRecipes) => {
        // console.log(json);
        for (let recipe of json.recipes) {
            console.log(recipe)
        }
        for (let recipe of json.recipes) {
            const div: HTMLDivElement = document.createElement('div');
            const img: HTMLImageElement = document.createElement('img');
            const pName: HTMLParagraphElement = document.createElement('p');
            const pIngredients: HTMLParagraphElement = document.createElement('p');
            const ulIngredients: HTMLUListElement = document.createElement('ul');
            const pInstructions: HTMLParagraphElement = document.createElement('p');
            const ulInstructions: HTMLUListElement = document.createElement('ul');

            div.append(img, pName, pIngredients, ulIngredients, pInstructions, ulInstructions);

            for (let ingredient of recipe.ingredients) {
                const li: HTMLLIElement = document.createElement('li');
                li.innerText = `${ingredient}`;
                ulIngredients.appendChild(li);
            }
            for (let i: number = 0; i < recipe.instructions.length; i++) {
                const li: HTMLLIElement = document.createElement('li');
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
