import mongoose from 'mongoose';

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  procedure: { type: Schema.Types.ObjectId, ref: 'Procedure', required: false },
  date: { type: Date, required: true },
  time: { type: Date, required: false },
  status: { type: String, maxlength: 255, required: false },
  is_confirmed: { type: Boolean, default: false },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export { Appointment };