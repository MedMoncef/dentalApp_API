import mongoose from 'mongoose';

const { Schema } = mongoose;

const appointmentReminderSchema = new Schema({
    appointment: { type: Schema.Types.ObjectId, ref: 'Appointment', required: true },
  }, { timestamps: true });
  
  const AppointmentReminder = mongoose.model('AppointmentReminder', appointmentReminderSchema);

export { AppointmentReminder };