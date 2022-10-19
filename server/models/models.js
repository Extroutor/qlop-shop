const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // внешние ключи sequelize подставит сам, когда будем делать связи
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER},
})

const Favorite = sequelize.define('favorite', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // внешние ключи sequelize подставит сам, когда будем делать связи
})

const FavoriteProduct = sequelize.define('favorite_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    size: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING, allowNull: false},
    // внешние ключи sequelize подставит сам, когда будем делать связи
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // внешние ключи sequelize подставит сам, когда будем делать связи
})

const OrderItem = sequelize.define('order_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // внешние ключи sequelize подставит сам, когда будем делать связи
    date: {type: DataTypes.DATE, allowNull: false},
    total_price: {type: DataTypes.INTEGER, allowNull: false},
    address: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const OrderItemProduct = sequelize.define('order_item_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasOne(Favorite)
Favorite.belongsTo(User)

User.hasOne(Order)
Order.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

BasketProduct.hasOne(Product)
Product.belongsTo(BasketProduct)

Favorite.hasMany(FavoriteProduct)
FavoriteProduct.belongsTo(Favorite)

FavoriteProduct.hasOne(Product)
Product.belongsTo(FavoriteProduct)

Category.hasMany(Product)
Product.belongsTo(Category)

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

OrderItem.hasMany(OrderItemProduct)
OrderItemProduct.belongsTo(OrderItem)

OrderItemProduct.hasOne(Product)
Product.belongsTo(OrderItemProduct)

module.exports = {
    User,
    Basket,
    BasketProduct,
    Favorite,
    FavoriteProduct,
    Category,
    Product,
    Order,
    OrderItem,
    OrderItemProduct
}