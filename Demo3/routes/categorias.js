const express = require('express');
const router = express.Router();

router.get('/ListarCategorias', (req, res) => {
    res.json({
        nombre: 'Categoria 1'
    });
});

module.exports = router;