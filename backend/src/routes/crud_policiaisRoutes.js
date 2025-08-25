const express = require('express');
const router = express.Router();
const controller = require('../controller/crud_policiaisController')

router.get('/policiais', controller.listarTodosPoliciais);
router.get('/policiais/:id', controller.buscarPolicialPorId);
router.post('/policiais', controller.cadastrarPolicial);
router.put('/policiais/:id', controller.atualizarPolicial);
router.delete('/policiais/:id', controller.deletarPolicial);

module.exports = router;