import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const favoriteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: Number, required: true },
  title: String,
  posterPath: String
}, { timestamps: true });

export default mongoose.model('Favorite', favoriteSchema);