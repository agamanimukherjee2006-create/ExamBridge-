import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Exam from './src/models/Exam.js'; // Adjust this path if your models folder is elsewhere

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This tells dotenv to look exactly in the root directory for your variables
dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// MongoDB Connection String handling using your Render Environment Secret Variable
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("ERROR: MONGODB_URI is not defined in the environment variables!");
    process.exit(1);
}

mongoose.connect(mongoURI)
    .then(() => {
        console.log("ExamBridge successfully linked to Database!");
    })
    .catch((err) => {
        console.error("Atlas Connection Error:", err);
    });

// Basic Root Test Route
app.get('/', (req: Request, res: Response) => {
    res.send('ExamBridge Backend API is sprinting smoothly!');
});

// Start listening for requests
app.listen(PORT, () => {
    console.log(`Server sprinting on port ${PORT}`);
});