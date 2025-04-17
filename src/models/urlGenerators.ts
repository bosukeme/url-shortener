import mongoose, { Schema } from 'mongoose';
import { IUrl } from '../types/interfaces';

const UrlSchema: Schema = new Schema<IUrl>({
  shortCode: { type: String, required: true, unique: true },
  longUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUrl>('Url', UrlSchema);
