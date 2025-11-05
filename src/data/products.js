// src/data/products.js

const products = [
    {
        id: "1",
        name: "Remera Oversize Negra",
        category: "remeras",
        price: 25000,
        stock: 10,
        description: "Remera oversize 100% algodón, corte urbano.",
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='%23050505'/><text x='50%' y='50%' font-size='32' text-anchor='middle' fill='%23FFCD01' dy='.3em'>Remera%20Negra</text></svg>",
    },
    {
        id: "2",
        name: "Buzo Hoodie Gris",
        category: "buzos",
        price: 45000,
        stock: 8,
        description: "Buzo hoodie premium, ideal para invierno.",
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='%23222222'/><text x='50%' y='50%' font-size='32' text-anchor='middle' fill='%23FFFFFF' dy='.3em'>Buzo%20Gris</text></svg>",
    },
    {
        id: "3",
        name: "Gorra Snapback",
        category: "accesorios",
        price: 15000,
        stock: 15,
        description: "Gorra snapback estilo urbano.",
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='%23141414'/><text x='50%' y='50%' font-size='32' text-anchor='middle' fill='%23FFCD01' dy='.3em'>Gorra</text></svg>",
    },
    {
        id: "4",
        name: "Remera Oversize Blanca",
        category: "remeras",
        price: 26000,
        stock: 5,
        description: "Remera oversize blanca, ideal para todos los días.",
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='%23f5f5f5'/><text x='50%' y='50%' font-size='32' text-anchor='middle' fill='%23050505' dy='.3em'>Remera%20Blanca</text></svg>",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((prod) => prod.id === id);
            if (product) {
                resolve(product);
            } else {
                reject("Producto no encontrado");
            }
        }, 500);
    });
};
