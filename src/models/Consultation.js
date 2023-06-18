import mongoose from 'mongoose';

const { Schema } = mongoose;

const consultationSchema = new Schema({
  content: { type: String, required: false },
  date: { type: Date, required: true },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  procedures: [{ type: Schema.Types.ObjectId, ref: 'Procedure' }],
}, { timestamps: true });

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;