import Faq from '../models/Faq';
import mongoose from 'mongoose';

export const fetchFAQs = async () => {
  return await Faq.find().lean();
};
