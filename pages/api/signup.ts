// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

const {
    AUTH_TOKEN,
    JWT_SECRET
} = process.env;

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    
}

export default handler