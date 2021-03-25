import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { validate } from '../utils/validate'
import { encryptedPassword } from '../utils/password'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

const api = Router()

api.post('/signup', async (req, res) => {
    const { error } = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const { firstname, lastname, email, password, confirmPassword } = req.body
    if(password !== confirmPassword) return res.status(400).send('password not equal')

    try {
        const prisma = new PrismaClient()
        const user = await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                password : encryptedPassword(password)
            }
        })
        const payload = { email }
        dotenv.config()
        const token = jwt.sign(payload, process.env.JWT_SECRET)

        res.json({user, token})
    } catch (error) {
        console.log(error)
    }
})

api.post('/signin', (req, res) => {
    res.send('hello world')
})

api.post('/forgot-password', (req, res) => {
    res.json({hello : "world"})
})


export default api

