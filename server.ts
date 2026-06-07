import 'crypto';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Exam from './src/models/Exam.js'; // Adjust this path if your models folder is elsewhere
import crypto from 'crypto';
if (!globalThis.crypto) {
    Object.defineProperty(globalThis, 'crypto', {
        value: crypto,
        writable: true,
        configurable: true
    });
}
// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Look for a local .env file first, but don't crash or block environment variables if it isn't there
dotenv.config();
const app = express();
const PORT = process.env.PORT || 10000;

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
// 1. CREATE: Add a new exam pattern/paper to the database
app.post('/api/exams', async (req: Request, res: Response) => {
    try {
        const newExam = new Exam(req.body);
        const savedExam = await newExam.save();
        res.status(201).json(savedExam);
    } catch (error: any) {
        res.status(400).json({ message: "Failed to create exam", error: error.message });
    }
});

// 2. READ ALL: Fetch all available exams from the database
app.get('/api/exams', async (req: Request, res: Response) => {
    try {
        const exams = await Exam.find();
        res.status(200).json(exams);
    } catch (error: any) {
        res.status(500).json({ message: "Failed to fetch exams", error: error.message });
    }
});

// 3. READ ONE: Fetch the exact details of a single exam by its unique MongoDB ID
app.get('/api/exams/:id', async (req: Request, res: Response) => {
    try {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: "Exam profile not found" });
        }
        res.status(200).json(exam);
    } catch (error: any) {
        res.status(500).json({ message: "Error retrieving exam data", error: error.message });
    }
});

// Start listening for requests
app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server sprinting on port ${PORT}`);
});