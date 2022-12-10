const ApiError = require("../error/ApiError");
const {Order, OrderItem, OrderItemProduct, BasketProduct, FavoriteProduct} = require("../models/models");

class OrderController{
    async create(req, res){
        let {userId} = req.body
        if (!userId || !Number(userId)){
            return next(ApiError.badRequest('Некорректный id пользователя'))
        }
        const orders = await Order.create({userId})
        return res.json(orders)
    }

    async createOrder(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('некорректный id'))
        }
        const {date, total_price, address, orderProducts} = req.body

        const order = await OrderItem.create({orderId: id, date, total_price, address})

        if (orderProducts){
            //basketProducts = JSON.parse(basketProducts)
            console.log(orderProducts)
            orderProducts.forEach(i =>
                OrderItemProduct.create({
                    orderItemId: order.id,
                    productId: i.productId,
                    count: i.count,
                    sizeId: i.sizeId,
                }),
            )
        }
        return res.json(order)
    }

    async getAll(req, res){
        const orders = await Order.findAndCountAll({
            include: [{
                model: OrderItem,
            }]
        })
        if (!orders){
            return next(ApiError.badRequest('заказы не найдены'))
        }
        return res.json(orders)
    }

    async getAllOrders(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        let {limit, page} = req.query
        page = page || 1 // текущая страница
        limit = limit || 5// количество отображаемых товаров на странице
        let offset =  page * limit - limit // отступ, чтобы товары на страницах не повторялись

        const orders = await OrderItem.findAndCountAll({
            where: {orderId: id},
            include: [{
                model: OrderItemProduct,
            }],
            limit,
            offset
        })
        if (!orders){
            return next(ApiError.badRequest('любимое не найдена'))
        }

        return res.json(orders)
    }

    async getOneOrder(req, res){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const order = await OrderItem.findOne({
            where: {orderId: id},
            include: [{
                model: OrderItemProduct,
            }]
        })
        if (!order){
            return next(ApiError.badRequest('любимое не найдена'))
        }

        return res.json(order)
    }

    async deleteOrder(req, res){
        let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await OrderItemProduct.destroy({where: {orderItemId: id}})

        await OrderItem.destroy({where: {id}})
    }

    //  new
    async addProduct(req, res){
        const {id, orderId, productId} = req.params

        if (!id || !productId || !orderId ){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const {count, sizeId} = req.body

        const product = OrderItemProduct.create({
            count: count,
            sizeId: sizeId,
            productId: productId,
            orderItemId: orderId
        })
        if (!product){
            return next(ApiError.badRequest('товар не создан'))
        }
        return res.json(product)
    }

    async deleteProduct(req, res){
        const {orderId, productId} = req.params
        if (!orderId || !productId){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await OrderItemProduct.destroy({where: {orderItemId: orderId, productId: productId}})
    }
}

module.exports = new OrderController()
