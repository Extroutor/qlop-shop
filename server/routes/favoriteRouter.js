const Router = require('express')
const router = new Router()
const favoriteController = require('../controllers/favoriteController')

router.post('/', favoriteController.create)
router.get('/:id', favoriteController.getOne)
router.put('/:id/add/:productId', favoriteController.addProduct)
router.put('/:id/delete/:productId', favoriteController.deleteProduct)
router.delete('/:id', favoriteController.delete)

module.exports = router
