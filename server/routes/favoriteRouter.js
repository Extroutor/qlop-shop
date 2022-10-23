const Router = require('express')
const router = new Router()
const favoriteController = require('../controllers/favoriteController')

router.post('/', favoriteController.create)
router.get('/:id', favoriteController.getOne)
router.put('/:id', favoriteController.addProduct)
router.put('/:id', favoriteController.deleteProduct)
router.delete('/:id', favoriteController.delete)

module.exports = router
