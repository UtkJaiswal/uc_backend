import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import connectDB from './config/mongodb/database';
import userRouter from './routes/user/userRoutes'

const app: Express = express();

connectDB();

app.use(express.json());
app.options('*', cors());


// app.get('/', (req: Request, res: Response) => {
//     res.status(200).json({message:"Welcome to the test server"})
// })

app.use('/users', userRouter)

export default app