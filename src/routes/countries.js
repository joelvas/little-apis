const { Router } = require('express');
const router = Router();
const { searchCountry } = require('../controllers/countries');

router.get('/location/search/:query', searchCountry)

module.exports = router