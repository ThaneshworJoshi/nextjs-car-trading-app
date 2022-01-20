import mongoose from 'mongoose';

export interface Company {
  _id: string;
  count: number;
}
export interface Model {
  _id: string;
  count: number;
}
export interface CarModel {
  _id: string;
  company: string;
  model: string;
  year: number;
  fuelType: string;
  kilometers: number;
  details: string;
  price: number;
  photoUrl: string;
}

const carSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Date, required: true },
    kilometers: { type: String, required: true },
    fuleType: { type: String, required: true },
    price: { type: Number, required: true },
    photoUrl: { type: String, required: true },
    details: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.models.Car || mongoose.model('Car', carSchema);
export default Car;
