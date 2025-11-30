"use strict";
fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then((goods) => {
    for (let cart of goods.carts) {
        for (let product of cart.products) {
            const img = document.createElement('img');
            const div = document.createElement('div');
            img.src = product.thumbnail;
            img.alt = product.title;
            div.innerText = `${product.id} title ${product.title}, price ${product.price}`;
            document.body.append(img, div);
        }
    }
});
//# sourceMappingURL=script.js.map