const ApiError = require("../error/ApiError");
const {Order, OrderItem, OrderItemProduct, BasketProduct, Product, Basket, Size} = require("../models/models");

class OrderController{
    async createOrderItem(req, res){
        const {userId} = req.params
        const {name, surname, email, address, phone, products, total_price} = req.body

        if (!userId){
            return next(ApiError.badRequest('некорректный id'))
        }

        const orders = await Order.findOne({where: { userId: userId}})

        if(!orders){
            return next(ApiError.badRequest('заказы этого пользователя не найдены'))
        }

        const order = await OrderItem.create({orderId: orders.id, name, surname,
            email, address, phone, total_price })

        const basket = await Basket.findOne({where: { userId: userId }})

        if (products){
            for (const i of products) {
//let sizeObj = await Size.findOne({where: { name: i.size} })
                await OrderItemProduct.create({
                    orderItemId: order.id,
                    productId: i.productId,
                    count: i.count,
                    sizeId: i.sizeId
//sizeId: sizeObj.id,
                })

                await BasketProduct.destroy({ where: {basketId: basket.id, productId: i.productId }})
            }
        }

        const result = await OrderItem.findOne({
            where: {id: order.id},
            include: [{
                model: OrderItemProduct,
                include: [{ model: Product }],
                order:
                    [['createdAt', 'ASC']]
            }],
        })
        return res.json(result)
    }

    async getAllByUserId(req, res){
        const {userId} = req.params

        if (!userId){
            return next(ApiError.badRequest('некорректный id'))
        }

        const order = await Order.findOne({where: { userId: userId }})

        if(!order){
            return next(ApiError.badRequest('заказы этого пользователя не найдены'))
        }

        const orderItems = await OrderItem.findAll({
            where: {orderId: order.id},
            include: [{
                model: OrderItemProduct,
                include: [{
                    model: Product,
                }, { model: Size}],
                order:
                    [['createdAt', 'ASC']]
            }],

            order:
                [['createdAt', 'ASC']]
        })
        if (!orderItems){
            return next(ApiError.badRequest('заказы не найдены'))
        }
        return res.json(orderItems)
    }

    async getOneOrder(req, res){
        const {id} = req.params

        if (!id){
            return next(ApiError.badRequest('некорректный id'))
        }

        const order = await OrderItem.findOne({
            where: {id},
            include: [{
                model: OrderItemProduct,
                include: [{ model: Product }],
                order:
                    [['createdAt', 'ASC']]
            }],
        })

        return res.json(order)
    }
}

module.exports = new OrderController()