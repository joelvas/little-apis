const { Router } = require('express')
const { getImage } = require('../controllers/google')

const router = Router()

router.get('/image/:query', getImage)
module.exports = router
