import app from './app';
import connectDB from './config/mongodb/database';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});