import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { serialize } from 'cookie'
import { setCookieOptions } from '../../lib/cookie'

const handler = (
    req: NextApiRequest,
    res: NextApiResponse
    ) => {
        
    const salt = bcrypt.genSaltSync(18)
    const { name, email, password } = req.body

    const hashedPass = bcrypt.hashSync(password, salt)

    if (req.method === 'POST') {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                const user = await prisma.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: hashedPass
                    }
                })
                console.log(user);
                const token = jwt.sign({ userId: user.id }, '5c49c11174964679bbdfa555a4569816', { expiresIn: '1h' })
                // console.log('token', token);
                // console.log('res', res);
                let creationDate = new Date
                let cookieOptions = setCookieOptions(creationDate)
                setCookie(res, token, cookieOptions)
                // console.log('res stat', res.status)/;
                res.status(200).json({
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                })
                resolve()
                return user
            } catch (error) {
                console.log(error)
                resolve()
                return error
            }

        })
    } 
    
}

const setCookie = (
    res: any,
    value: string,
    options: Record<string, unknown> = {}) => {
    
    const stringValue = typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);

    res.setHeader("Set-Cookie", serialize('auth', stringValue, options))
    }

export default handler