const ApiError = require("../error/ApiError");
const {Favorite, FavoriteProduct, BasketProduct, Basket} = require("../models/models");

class FavoriteController{
    async create(req, res){
        let {userId, favoriteProducts } = req.body
        if (!userId || !Number(userId)){
            return next(ApiError.badRequest('Некорректный id пользователя'))
        }

        const favorite = await Favorite.create({userId})

        console.log(favoriteProducts)
        if (favoriteProducts){
            favoriteProducts.forEach(i =>
                FavoriteProduct.create({
                    favoriteId: favorite.id,
                    productId: i.productId,
                })
            )
        }
        return res.json(favorite)
    }

    async getOne(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const favorite = await Favorite.findOne({
            where: {id},
            include: [{
                model: FavoriteProduct,
            }]
        })
        if (!favorite){
            return next(ApiError.badRequest('любимое не найдена'))
        }

        return res.json(favorite)
    }

    async delete(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await FavoriteProduct.destroy({where: {favoriteId: id}})

        await Favorite.destroy({where: {id}})
    }

    //  new
    async addProduct(req, res){
        const {id, productId} = req.params
        console.log(req.params)
        if (!id || !productId ){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const product = FavoriteProduct.create({
            favoriteId: id,
            productId: productId,
        })
        if (!product){
            return next(ApiError.badRequest('товар не создан'))
        }
        return res.json(product)
    }

    async deleteProduct(req, res){
        const {id, productId} = req.params
        if (!id || !productId){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await FavoriteProduct.destroy({where: {favoriteId: id, productId: productId}})
    }

}

module.exports = new FavoriteController()
