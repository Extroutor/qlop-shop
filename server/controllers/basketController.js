const {Basket, BasketProduct} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController{
    async create(req, res){
        let {userId, basketProducts } = req.body
        if (!userId || !Number(userId)){
            return next(ApiError.badRequest('Некорректный id пользователя'))
        }

        const basket = await Basket.create({userId})

        if (basketProducts){
            console.log(basketProducts)
            //basketProducts = JSON.parse(basketProducts)
            basketProducts.forEach(i =>
                BasketProduct.create({
                        basketId: basket.id,
                        basketProductId: i.basketProductId,
                        count: i.count,
                    })
            )
        }
        return res.json(basket)
    }

    async getOne(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const basket = await Basket.findOne({
            where: {id},
            include: [{
                model: BasketProduct,
            }]
        })
        if (!basket){
            return next(ApiError.badRequest('корзина не найдена'))
        }

        return res.json(basket)
    }

    //  new
    async addProduct(req, res){
        const id = req.params
        if (!id || Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const {productId, count, sizeId} = req.body
        const product = BasketProduct.create({
            basketId: id,
            productId: productId,
            count: count,
            sizeId: sizeId,
        })
        if (!product){
            return next(ApiError.badRequest('товар не создан'))
        }

        return res.json(basket)
    }

    async deleteProduct(req, res){
        const id = req.params
        if (!id || Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const {productId} = req.body
        await BasketProduct.destroy({where: {basketId: id, productId: productId}})
    }

    async delete(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await BasketProduct.destroy({where: {basketId: id}})

        await Basket.destroy({where: {id}})
    }
}

module.exports = new BasketController()
