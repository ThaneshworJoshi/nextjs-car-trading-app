import mongoose from 'mongoose';

export interface FaqModel {
  _id: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Faq = mongoose.models.Faqs || mongoose.model('Faqs', faqSchema);
export default Faq;
