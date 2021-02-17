const productos = require('./productos/productos');

console.log('Iniciar el Programa');
console.time('Iniciando');

productos.getProducto('manzana', (data) => {
    console.log('Producto 1 : ', data);

});

productos.getProducto('peras', (data) => {
    console.log('Producto 2 : ', data);
    console.timeEnd('Iniciando');
});

console.log('Fin del programa');
