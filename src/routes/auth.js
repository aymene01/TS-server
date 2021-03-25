import { Router } from 'express'

const api = Router()

api.post('/signin', (req, res) => {
    res.json({hello : "world"})
})

api.post('/signup', (req, res) => {
    res.send('hello world')
})

api.post('/forgot-password', (req, res) => {
    res.json({hello : "world"})
})


export default api

