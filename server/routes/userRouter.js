const Router = require('express')
const router = new Router()
const userController = require ('../controllers/userController')
const authMiddleware = require('../middleware/authmiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)
router.get('/auth', authMiddleware, userController.check)

module.exports = router
