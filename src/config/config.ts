import dotenv from 'dotenv';
import { IConfig } from '../types/interfaces';

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongo_uri: process.env.MONGO_URI as string,
  base_url: process.env.BASE_URL || 'http://localhost:3000'
  
};

export default config;
