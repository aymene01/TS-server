import { Router } from 'express'
import users from './users'

const api = Router()

api.use('/user', users)

export default api