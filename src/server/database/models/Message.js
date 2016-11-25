import mongoose from 'mongoose';
export default new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
  },
  massage: {
    type: String,
  },
});
