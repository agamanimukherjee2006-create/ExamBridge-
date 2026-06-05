import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Exam from './src/models/Exam.ts';

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This tells dotenv to look exactly in the root directory for your .env file
dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
mongoose.connect('mongodb+srv://agamanimukherjee2006_db_user:X0EHBEJ64wwOvW1u@cluster0.jhwdpzq.mongodb.net/ExamBridgeDB?retryWrites=true&w=majority')
  .then(() => console.log('🚀 ExamBridge successfully linked to MongoDB Atlas!'))
  .catch(err => console.error('❌ Atlas Connection Error:', err));

// Route 1: Save Exam JSON data to MongoDB Atlas
app.post('/api/exams/save', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, subject, questions } = req.body;
    
    const newExam = new Exam({
      title,
      subject,
      questions
    });

    const savedExam = await newExam.save();
    res.status(201).json({ message: 'Exam saved to Atlas!', examId: savedExam._id });
  }catch (err) {
  console.error("❌ Mongoose Save Error Details:", err); 
  res.status(500).json({ error: "Failed to save exam data" });
}
});

// Route 2: Get all saved exams (To display on your frontend app)
app.get('/api/exams', async (req: Request, res: Response) => {
  try {
    const exams = await Exam.find().sort({ createdAt: -1 });
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve exams' });
  }
});

app.get('/', (req, res) => {
  res.send('ExamBridge API Server Running...');
});

app.listen(PORT, () => {
  console.log(`⚡ Server sprinting on port ${PORT}`);
});