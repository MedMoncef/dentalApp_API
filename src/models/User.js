import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cin: { type: String, required: false },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  role: { type: String, enum: ['admin', 'manager'], default: 'admin' },
  is_verified: { type: Boolean, default: true },
  is_active: { type: Boolean, default: true },
  is_staff: { type: Boolean, default: false },
  is_an_employee: { type: Boolean, default: false },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;