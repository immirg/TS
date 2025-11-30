// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
type Product = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    thumbnail: string
}
type Cart = {
    id: number,
    products: Product[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}
type ArrCart = {
    carts: Cart[],
    total: number,
    skip: number,
    limit: number
}

fetch('https://dummyjson.com/carts')
    .then((response: Response): Promise<ArrCart> => response.json())
    .then((goods: ArrCart): void => {
        for (let cart of goods.carts) {
            for (let product of cart.products) {
                const img: HTMLImageElement = document.createElement('img');
                const div: HTMLDivElement = document.createElement('div');

                img.src = product.thumbnail;
                img.alt = product.title;
                div.innerText = `${product.id} title ${product.title}, price ${product.price}`;

                document.body.append(img, div);
            }
        }
    });
