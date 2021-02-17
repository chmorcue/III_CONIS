const getProductoSync = (id) => {
    let inicio = new Date().getTime();
    while (new Date().getTime() - inicio <= 5000) {
        //... Esperando 3 segundos
    }

    return `Producto ${id}`;
}


const getProducto = (id, callback) => {
    let producto = `Producto ${id}`;

    setTimeout(() => {
        callback(producto);
    }, 5000);

}

module.exports = {
    getProducto,
    getProductoSync
}