import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const api = Router()

api.get('/:id', async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const id = parseInt(req.params.id, 10)
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        if(!user) return res.status(404).send(`the user with the id ${id} was not found`)
        res.json({user: user})
    } catch (error) {
        console.log(error)
    }
})

export default api