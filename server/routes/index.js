const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const ProductRouter = require('./ProductRouter')
const categoryRouter = require('./categoryRouter')
const basketRouter = require('./basketRouter')
const favoriteRouter = require('./favoriteRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/product', ProductRouter)
router.use('/basket', basketRouter)
router.use('/favorite', favoriteRouter)

module.exports = router
