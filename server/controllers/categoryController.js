const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController {
    async create(req, res){
        const {name} = req.body
        const category = await Category.create({name})
        if (!category){
            return next(ApiError.badRequest('Категория не найдена'))
        }
        return res.json(category)
    }

    async getAll(req, res) {
        const categories = await Category.findAll()
        if (!categories){
            return next(ApiError.badRequest('Категории не найдена'))
        }
        return res.json(categories)
    }

    async getOne(req, res) {
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const category = await Category.findOne({where: {id}})
        if (!category){
            return next(ApiError.badRequest('Категории не найден'))
        }
        return res.json(category)
    }

    async update(req, res) {
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const {name} = req.body
        if (!name){
            return next(ApiError.badRequest('Некорректное имя'))
        }

        const category = await Category.findOne({where: {id}})
        if (!category){
            return next(ApiError.badRequest('Категория не найдена'))
        }
        category.update({name: {name}})
        return res.json(category)
    }

    async delete(req){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const category = await Category.findOne({where: {id}})
        if (!category){
            return next(ApiError.badRequest('Категории не найден'))
        }
        category.destroy()
    }
}

module.exports = new CategoryController()