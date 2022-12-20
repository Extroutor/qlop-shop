const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/user/:userId', orderController.createOrderItem)
router.get('/user/:userId', orderController.getAllByUserId)
router.get('/order/:id', orderController.getOneOrder)

module.exports = router