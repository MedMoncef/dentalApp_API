import mongoose from 'mongoose';

const { Schema } = mongoose;

const supplierSchema = new Schema({
  name: { type: String, required: true },
  company_name: { type: String, required: false },
  tax_identification_number: { type: String, required: false },
  email: { type: String, required: false },
  address: { type: String, required: false },
  phone: { type: String, required: false },
  website: { type: String, required: false },
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;