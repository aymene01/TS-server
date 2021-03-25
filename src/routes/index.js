import { Router } from 'express'
import auth from './auth'
import secured from './secured'

const api = Router()

api.use('/auth', auth)
api.use('/', secured)

export default api