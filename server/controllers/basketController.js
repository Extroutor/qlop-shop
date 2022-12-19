const {Basket, BasketProduct, Size} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async create(req, res) {
        let {userId, basketProducts} = req.body
        if (!userId || !Number(userId)) {
            return next(ApiError.badRequest('Некорректный id пользователя'))
        }

        const basket = await Basket.create({userId})

        if (basketProducts) {
            console.log(basketProducts)
            //basketProducts = JSON.parse(basketProducts)
            for (const i of basketProducts) {
                let sizeObj = await Size.findOne({where: {name: i.size}})
                await BasketProduct.create({
                    basketId: basket.id,
                    productId: i.productId,
                    count: i.count,
                    sizeId: sizeObj.id
                })
            }
        }
        return res.json(basket)
    }

    async getOne(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const basket = await Basket.findOne({
            where: {userId: id},
            include: [{
                model: BasketProduct,
            }],
            order:
                [['createdAt', 'ASC']]
        })

        if (!basket){
            return next(ApiError.badRequest('корзина не найдена'))
        }

        return res.json(basket)
    }

    async addProduct(req, res, next){
        const {id} = req.params
        if (!id ){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const {productId, size, count} = req.body

        let sizeId = null
        if(size){
            const sizeObj = await Size.findOne({where: {name: size}})
            sizeId = sizeObj.id
        }

        const basket = await Basket.findOne({where:{userId: id}, include: [{
                model: BasketProduct,
            }]})
        if(!basket){
            return next(ApiError.badRequest('корзины с таким id не существует'))
        }

        const productExist = await BasketProduct.findOne({
            where: {
                basketId: basket.id,
                productId: productId,
                sizeId: sizeId
            }
        })

        if(!productExist){
            const product = await BasketProduct.create({
                basketId: id,
                productId: productId,
                count: count,
                sizeId: sizeId
            })

            if (!product){
                return next(ApiError.badRequest('товар не создан'))
            }
        } else {
            productExist.update({ count: count+1} )
        }
        return res.json(basket)
    }

    async deleteProduct(req, res, next){
        const {basketId, productId} = req.params
        if (!basketId || !productId){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await BasketProduct.destroy({where: {basketId: basketId, productId: productId}})
        return res.json(true)
    }

    async delete(req, res) {
        let {id} = req.params
        if (!Number(id)) {
            return next(ApiError.badRequest('Некорректный id'))
        }
        await BasketProduct.destroy({where: {basketId: id}})

        await Basket.destroy({where: {id}})
    }
}

module.exports = new BasketController()