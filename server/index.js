require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).json({message: 'working'})
})

const start = async () => {
    try {
        await sequelize.authenticate() // установка подключения к бд
        await sequelize.sync() // сверка состояния бд со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()