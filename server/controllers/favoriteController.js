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
            }],
            order:
                [['createdAt', 'ASC']]
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
    async addProduct(req, res, next){
        const {userId, productId} = req.params

        if (!userId || !productId ){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const favorite = await Favorite.findOne({ where: { userId: userId }})
        if (!favorite){
            return next(ApiError.badRequest('нет избранных'))
        }

        let favoriteProduct = await FavoriteProduct.findOne({
            where: {
                favoriteId: favorite.id,
                productId: productId,
            }
        })

        if (!favoriteProduct){
            favoriteProduct = await FavoriteProduct.create({
                favoriteId: favorite.id,
                productId: productId,
            })}

        return res.json(favoriteProduct)
}

    async deleteProduct(req, res, next){
        const {userId, productId} = req.params
        if (!userId || !productId){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const favorite = await Favorite.findOne({ where: {userId: userId} })
        if (!favorite){
            return next(ApiError.badRequest('товара нет в избранных'))
        }
        await FavoriteProduct.destroy({where: {favoriteId: favorite.id, productId: productId}})

        return res.json(true)
    }

}

module.exports = new FavoriteController()
