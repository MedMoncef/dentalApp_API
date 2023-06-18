import mongoose from 'mongoose';

const { Schema } = mongoose;

const prescriptionSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  medications: [{ type: Schema.Types.ObjectId, ref: 'Medication' }],
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: false },
  consultation: { type: Schema.Types.ObjectId, ref: 'Consultation', required: false },
}, { timestamps: true });

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;