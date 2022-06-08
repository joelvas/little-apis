const { Router } = require('express');
const { get, post } = require('../controllers/images');

const router = Router()

router.get('/:id', get);
router.post('/', post);
module.exports = router