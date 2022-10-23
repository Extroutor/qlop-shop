const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res){
        const {name, size, price, categoryId, img} = req.body
        const category = await Product.create({name, size, price, categoryId, img})
        return res.json(category)
    }

    async getAll(req, res) {
        let {size_id, categoryId, limit, page} = req.query
        page = page || 1 // текущая страница
        limit = limit || 9// количество отображаемых товаров на странице
        let offset =  page * limit - limit // отступ, чтобы товары на страницах не повторялись

        let products
        if (!size_id && !categoryId){
            products = await Product.findAndCountAll({limit, offset})
        }
        if (size_id && !categoryId){
            products = await Product.findAndCountAll({where: {size_id}, limit, offset})
        }
        if (!size_id && categoryId){
            products = await Product.findAndCountAll({where: {categoryId}, limit, offset})
        }
        if (size_id && categoryId){
            products = await Product.findAndCountAll({where: {size_id, categoryId}, limit, offset})
        }
        return res.json(products)
    }

    async getOne(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const product = await Product.findOne({where: {id}})
        if (!product){
            return next(ApiError.badRequest('Товар не найден'))
        }
        return res.json(product)
    }

    async update(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const {name, size, price, categoryId, img} = req.body
        await Product.update(
            {name, size, price, categoryId, img},
            {where: {id}})
    }

    async delete(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await Product.destroy({where: {id}})
    }
}

module.exports = new ProductController()