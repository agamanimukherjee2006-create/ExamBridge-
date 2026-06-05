import mongoose, { Schema, Document } from 'mongoose';

export interface IExam extends Document {
  title: string;
  subject: string;
  questions: Array<{
    questionText: string;
    options: string[];
    correctAnswer: string;
  }>;
  createdAt: Date;
}

const ExamSchema: Schema = new Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IExam>('Exam', ExamSchema);