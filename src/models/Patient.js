import mongoose from 'mongoose';

const { Schema } = mongoose;

const patientSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, maxlength: 255, required: false },
  phone: { type: Number, required: false },
  address: { type: String, maxlength: 255, required: false },
  birthdate: { type: Date, required: false },
  medical_history: { type: String, required: false },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    default: 'MALE',
    required: false,
  },
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;