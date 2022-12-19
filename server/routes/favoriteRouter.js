const Router = require('express')
const router = new Router()
const favoriteController = require('../controllers/favoriteController')

router.post('/', favoriteController.create)
router.get('/:id', favoriteController.getOne)
router.delete('/:id', favoriteController.delete)
router.put('/user/:userId/add/:productId', favoriteController.addProduct)
router.put('/user/:userId/delete/:productId', favoriteController.deleteProduct)
module.exports = router
