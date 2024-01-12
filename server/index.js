import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import settings from './settings.js';
import { db } from './models/connection.js';
import customersRouter from './routes/customers.routes.js';
import authRouter from './routes/auth.routes.js';
import cookieParser from "cookie-parser";

db.connect();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin: settings.clientUrl}));
app.use(cookieParser());

app.use('/api/customers', customersRouter);
app.use('/api/auth', authRouter);

app.listen(settings.port, () => {
  console.log(`Server listening on port ${settings.port}`);
});