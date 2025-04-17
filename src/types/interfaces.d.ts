import mongoose, { Document } from 'mongoose';

export interface IConfig {
  port: number;
  nodeEnv: string;
  mongo_uri: string;
  base_url: string;
}

export interface IAppError extends Error {
  status?: number;
}

export interface IRateLimitConfig {
  limit: number;
  windowSeconds: number;
}

export interface IUrl extends Document {
  shortCode: string;
  longUrl: string;
  createdAt: Date;
}
