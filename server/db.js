const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'postgres',
        // Для удаленного подключения
        // dialectOptions: {
        //     ssl: {
        //         require: true, // This will help you. But you will see nwe error
        //         rejectUnauthorized: false // This line will fix new error
        //     }
        // },
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
