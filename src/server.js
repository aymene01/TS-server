import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import { PrismaClient } from '@prisma/client'


const server = async () => {
    try {
        /* initialaze the express app */
        const app = express()

        /* Middlewares*/
        app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
        app.use('/api', routes)

        /* connection to the db */
        const prisma = new PrismaClient()
        await prisma.$connect()
        console.log('succefully connected to the db !')

        dotenv.config()

        const port = parseInt(process.env.PORT || 3000, 10)

        app.listen(port, () => console.log(`app is running on port ${port}`))

    } catch (error) {
        console.log(error)
    }
}

server()