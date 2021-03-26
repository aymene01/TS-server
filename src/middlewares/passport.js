import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JsonWebTokenStrategy, ExtractJwt } from 'passport-jwt'
import { PrismaClient } from '@prisma/client'
import { comparePassword } from '../utils/password'
import dotenv from 'dotenv'

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const prisma = new PrismaClient()
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user) return done('email not found', null)
        if(!comparePassword(password, user.password)) return done('password not equal', null)

        done(null, user)
    } catch (error) {
        done(error, null)
    }
}))


dotenv.config()

passport.use(new JsonWebTokenStrategy({
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (jwtPaylod, done) => {
    try {
        const { email } = jwtPaylod
        const prisma = new PrismaClient()
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user) return done('invalid token', null)

        done(user, null)
    } catch (error) {
        done(err, null)
    }
}))