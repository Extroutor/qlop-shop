const ApiError = require("../error/ApiError");
const {Favorite, FavoriteProduct} = require("../models/models");

class FavoriteController{
    async create(req, res){
        let {userId, favoriteProducts } = req.body
        if (!userId || !Number(userId)){
            return next(ApiError.badRequest('Некорректный id пользователя'))
        }

        const favorite = await Favorite.create({userId})

        if (favoriteProducts){
            console.log(favoriteProducts)
            //basketProducts = JSON.parse(basketProducts)
            favoriteProducts.forEach(i =>
                FavoriteProduct.create({
                    favoriteId: favorite.id,
                    favoriteProductId: i.favoriteProductId,
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

    //  пока не работает :(
    async addProduct(req, res){
    }

    async deleteProduct(req, res){
    }

    async delete(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await FavoriteProduct.destroy({where: {favoriteId: id}})

        await Favorite.destroy({where: {id}})
    }
}

module.exports = new FavoriteController()