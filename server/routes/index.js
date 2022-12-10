const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const basketRouter = require('./basketRouter')
const favoriteRouter = require('./favoriteRouter')
const orderRouter = require('./orderRouter')
const sizeRouter = require('./sizeRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)
router.use('/favorite', favoriteRouter)
router.use('/orders', orderRouter)
router.use('/sizes', sizeRouter)

module.exports = router
