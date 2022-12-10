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
}

module.exports = new SizeController()