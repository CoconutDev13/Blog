require('dotenv').config()

const database = require('./src/configurations/Database')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const error = require('./src/middlewares/error')

const application = express()
const PORT = process.env.PORT || 5000

application.use(express.json())
application.use(cookieParser())
application.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

application.use(error)

application.use('/api', require('./src/components/users/routes/UserRoute'))
application.use('/api/blog', require('./src/components/posts/routes/PostRoute'))

async function main() {
    await database.connect()
    application.listen(PORT, (error) => console.log(error || `Server is running on PORT ${PORT}`))
}

main()