const { Router } = require('express')
const { getImage } = require('../controllers/googles')

const router = Router()

router.get('/image/', getImage)
module.exports = router
