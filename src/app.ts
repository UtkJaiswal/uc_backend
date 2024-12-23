import express, { Express } from 'express';
import dotenv from 'dotenv';


const app: Express = express();


app.use(express.json());

export default app

