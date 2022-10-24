const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.create )
router.post('/:id', orderController.createOrder)
router.get('/:id', orderController.getAllOrders)
router.get('/order/:id', orderController.getOneOrder)
//router.put('/:id', orderController.update)
router.delete('/order/:id', orderController.deleteOrder)

module.exports = router