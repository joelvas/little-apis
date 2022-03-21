const { Router } = require('express');
const { getAll } = require('../controllers/cryptos');

const router = Router();

router.get('/', getAll);

module.exports = router