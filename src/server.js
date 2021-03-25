import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'

const server = async () => {
    try {
        const app = express()

        /* Middlewares*/
        app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
        app.use('/api', routes)

        dotenv.config()

        const port = process.env.PORT || 3000

        app.listen(port, () => console.log(`app is running on port ${port}`))

    } catch (error) {
        console.log(error)
    }
}

server()