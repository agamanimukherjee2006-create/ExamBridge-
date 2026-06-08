import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Schema & Model Definitions
const examSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    subject: { type: String, required: true },
    questions: { type: Array, default: [] }
});

const Exam = mongoose.model('Exam', examSchema);

// MongoDB Connection Setup
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/exambridge";
mongoose.connect(mongoURI)
    .then(() => console.log("ExamBridge successfully linked to Database!"))
    .catch((err) => console.error("Database connection error:", err));

// =========================================================================
// BACKEND ROUTE HANDLERS
// =========================================================================

// 1. CREATE ALL: Manually create/save a structured exam layout to DB
app.post('/api/exams', async (req: Request, res: Response) => {
    try {
        const newExam = new Exam(req.body);
        const savedExam = await newExam.save();
        return res.status(201).json(savedExam);
    } catch (error: any) {
        console.error(error);
        return res.status(400).json({ message: "Failed to create exam", error: error.message });
    }
});

// 2. GENERATE AI: Use incoming parameters to structure generation logic
app.post('/api/exams/generate-ai', async (req: Request, res: Response) => {
    try {
        const { topic, subject } = req.body;

        if (!topic || !subject) {
            return res.status(400).json({ message: "Both topic and subject are required variables." });
        }

        // TODO: Integrate your Google Cloud / Gemini AI generation logic right here!
        return res.status(200).json({
            message: "AI Exam generation route placeholder working",
            data: { topic, subject }
        });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: "Failed to generate" });
    }
});

// 3. READ ALL: Fetch all available exams from the database
app.get('/api/exams', async (req: Request, res: Response) => {
    try {
        const exams = await Exam.find();
        return res.status(200).json(exams);
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: "Failed to fetch exams" });
    }
});

// 4. READ ONE: Fetch the exact details of a single exam by its Object ID
app.get('/api/exams/:id', async (req: Request, res: Response) => {
    try {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: "Exam profile not found" });
        }
        return res.status(200).json(exam);
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: "Error retrieving exam data" });
    }
});

// =========================================================================
// SERVER INITIALIZATION & RENDER PORT BINDING
// =========================================================================
const PORT = process.env.PORT || 10000;

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server sprinting on port ${PORT}`);
});