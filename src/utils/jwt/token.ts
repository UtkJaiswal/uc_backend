import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const generateToken = (userId: number) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRES_IN });
};