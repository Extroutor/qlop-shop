const ApiError = require("../error/ApiError");
const {Size, ProductSize} = require("../models/models");

class SizeController{
    async create(req, res){
        const {name} = req.body
        if (!name){
            return next(ApiError.badRequest('Некорректный имя размера'))
        }
        const size = await Size.create({name})
        return res.json(size)
    }

    async getAll(req, res){
        const sizes = await Size.findAll()
        if (!sizes){
            return next(ApiError.badRequest('размеры не найден'))
        }
        return res.json(sizes)
    }

    async getOne(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const size = await Size.findOne({where: {id}})
        if (!size){
            return next(ApiError.badRequest('размер не найден'))
        }
        return res.json(size)
    }

    async delete(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await ProductSize.destroy({where: {sizeId: id}})

        await Size.destroy({where: {id}})
    }

    async getSizeByProductId(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        let productSizes = await ProductSize.findAll({where: {productId : id}})
        if (!productSizes){
            return next(ApiError.badRequest('размеры не найдены'))
        }

        let sizes = []
        if (productSizes){
            for (const s of productSizes) {
                console.log(s.sizeId)
                const size = await Size.findOne({where: {id: s.sizeId}})
                console.log(size)
                sizes.push(size.name)
            }
        }
        return res.json(sizes)
    }
}

module.exports = new SizeController()