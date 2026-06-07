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
import { GoogleGenAI } from '@google/genai';

// Initialize the Google Cloud SDK natively using your secure environment token
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// AI GENERATE: Leverages Google Cloud Gemini to build smart exam sheets instantly
app.post('/api/exams/generate-ai', async (req: Request, res: Response) => {
    try {
        const { topic, subject } = req.body;

        if (!topic) {
            return res.status(400).json({ message: "Topic placeholder parameter is required" });
        }

        // Construct a structured prompt forcing Gemini to reply in exact schema-compliant JSON
        const aiPrompt = `Generate a 3-question multiple choice test about the topic: "${topic}" inside the subject "${subject || 'General Engineering'}". 
        Return the result strictly as a raw JSON object matching this structural format:
        {
          "title": "${topic} Automated AI Quiz",
          "subject": "${subject || 'Computer Science'}",
          "durationMinutes": 30,
          "totalMarks": 30,
          "questions": [
            {
              "questionText": "Sample Question Text?",
              "options": ["Choice A", "Choice B", "Choice C", "Choice D"],
              "correctAnswer": "Choice A"
            }
          ]
        }`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: aiPrompt,
        });

        const rawText = response.text;
        if (!rawText) throw new Error("Empty processing return from Google Cloud AI cluster");

        // Clean any accidental markdown block wrappers if returned by the string parser
        const cleanJsonString = rawText.replace(/```json|```/g, "").trim();
        const parsedExamData = JSON.parse(cleanJsonString);

        // Instantly save Google's generated layout straight into your cloud database
        const newExam = new Exam(parsedExamData);
        const savedExam = await newExam.save();

        res.status(201).json({
            message: "Exam built instantly using Google Cloud Gemini AI!",
            data: savedExam
        });

    } catch (error: any) {
        res.status(500).json({ 
            message: "Google Cloud AI integration pipeline error", 
            error: error.message 
        });
    }
});
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