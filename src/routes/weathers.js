const { Router } = require('express');
const { get, searchCountry} = require('../controllers/weathers');

const router = Router();

router.get('/location/:woeid', get);
router.get('/location/search/:query', searchCountry);


module.exports = router;