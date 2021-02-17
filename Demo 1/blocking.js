const productos = require('./productos/productos');

console.log('Iniciar el Programa');
console.time('Iniciando');

let producto_1 = productos.getProductoSync('manzana');
console.log('Producto 1 : ', producto_1);

let producto_2 = productos.getProductoSync('peras');
console.log('Producto 2 : ', producto_2);

console.log('Fin del programa');
console.timeEnd('Iniciando');