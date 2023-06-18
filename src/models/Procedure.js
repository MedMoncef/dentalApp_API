import mongoose from 'mongoose';

const { Schema } = mongoose;

const procedureSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, default: 0.000 },
}, { timestamps: true });

const Procedure = mongoose.model('Procedure', procedureSchema);

export default Procedure;