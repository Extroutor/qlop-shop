const Router = require('express')
const router = new Router()
const sizeController = require('../controllers/sizeController')

router.post('/', sizeController.create)
router.get('/', sizeController.getAll)
router.get('/:id', sizeController.getOne)
router.delete('/:id', sizeController.delete)
router.get('/product/:id', sizeController.getSizeByProductId)

module.exports = router