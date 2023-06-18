import mongoose from 'mongoose';

const { Schema } = mongoose;

const medicationSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, default: 0.000 },
}, { timestamps: true });

const Medication = mongoose.model('Medication', medicationSchema);

export default Medication;