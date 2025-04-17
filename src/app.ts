import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import urlGeneratorRoute from './routes/urlGenerator';

const app = express();

app.use(express.json());

app.use(urlGeneratorRoute);

app.use(errorHandler);

export default app;
