require('dotenv').config()

const database = require('./src/configurations/Database')
const express = require('express')
const cookieParser = require('cookie-parser')
const error = require('./src/middlewares/error')

const application = express()
const PORT = process.env.PORT || 5000

application.use(express.json())
application.use(cookieParser())
application.use(error)

application.use('/api', require('./src/components/users/routes/UserRoute'))

async function main() {
    await database.connect(() => console.log('Database connection established'))
    application.listen(PORT, (error) => console.log(error || `Server is running on PORT ${PORT}`))
}

main()