// utils/seedProducts.js
const Product = require('../models/Product');

async function seedProducts() {
    const fruits = [
        { name: 'Manzana', price: 1.5 },
        { name: 'Banana', price: 0.8 },
        { name: 'Naranja', price: 1.2 },
        { name: 'Fresa', price: 2.0 },
        { name: 'Piña', price: 3.5 }
    ];

    try {
        for (let fruit of fruits) {
            await Product.create(fruit);
        }
        console.log('Productos de frutas creados exitosamente');
    } catch (error) {
        console.error('Error al crear productos:', error);
    }
}

module.exports = seedProducts;
