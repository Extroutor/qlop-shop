const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.create )
router.post('/:id', orderController.createOrder)
router.get('/:id', orderController.getAllOrders)
router.get('/:id/:orderId', orderController.getOneOrder)
router.put('/:id/:orderId/add/:productId', orderController.addProduct)
router.put('/:id/:orderId/delete/:productId', orderController.deleteProduct)
router.delete('/:id/:orderId', orderController.deleteOrder)

module.exports = router
