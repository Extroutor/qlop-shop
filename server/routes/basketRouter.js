const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.create)
router.get('/:id', basketController.getOne)
router.post('/product/:id', basketController.addProduct)
// router.delete('/product/:id', basketController.deleteProduct)
router.delete('/:id', basketController.delete)
router.put('/:basketId/delete/:productId', basketController.deleteProduct)
module.exports = router
