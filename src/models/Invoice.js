import mongoose from 'mongoose';

const { Schema } = mongoose;

const invoiceSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: false },
  date: { type: Date, required: true },
  payment_status: { type: String, maxlength: 255, required: false },
  amount: { type: Number, default: 0.000 },
  is_confirmed: { type: Boolean, default: false },
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;