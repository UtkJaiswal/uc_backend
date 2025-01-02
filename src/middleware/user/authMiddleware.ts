import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JWTPayload {
    id: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: JWTPayload;
        }
    }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): Response<any> | void => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header provided' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: 'Authorization header must be in the format "Bearer <token>"' });
    }

    const token = parts[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
        req.user = decoded; 
        // console.log("Decoded token (req.user):", req.user); 
        next(); 
    } catch (error) {
        console.error("Token verification error:", error); 
        return res.status(401).json({ error: 'Invalid token' });
    }
};

export default authMiddleware;
