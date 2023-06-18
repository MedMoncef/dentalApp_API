import mongoose from 'mongoose';

const { Schema } = mongoose;

const paymentSchema = new Schema({
  invoice: { type: Schema.Types.ObjectId, ref: 'Invoice', required: true },
  date: { type: Date, required: true },
  amount: { type: Number, default: 0.000 },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;