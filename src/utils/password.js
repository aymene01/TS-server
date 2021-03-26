import bcrypt from 'bcrypt'  

export const encryptedPassword = str => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(str, salt)
}

export const comparePassword = str => {
    return bcrypt.compareSync(str,encryptedPassword(str))
}
