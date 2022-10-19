const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const ProductRouter = require('./ProductRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/product', ProductRouter)

module.exports = router