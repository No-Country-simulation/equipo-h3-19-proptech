import express, { Application } from 'express';
import routes from './routes';
import cors  from 'cors'
import cookieParser from 'cookie-parser';
const app: Application = express();

//#region DETECTAR ORIGEN
const isProduction = process.env.NODE_ENV === 'production';
const ourFront = process.env.ORIGIN;
const origin = isProduction ? ourFront : 'http://localhost:5173';
//#endregion

app.use(express.json());
app.use(cors({
  origin,
  credentials: true
}))

app.use(cookieParser());

app.use('/api/v1', routes);

export default app;
