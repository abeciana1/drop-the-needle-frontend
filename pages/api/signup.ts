import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

const salt = bcrypt.genSaltSync(18)

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const { name, email, password } = req.body

    const hashedPass = bcrypt.hashSync(password, salt)

    if (req.method === 'POST') {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPass
            }
        })
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'})
    } 
    
}

export default handler