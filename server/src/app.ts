import express, { Application } from 'express';
import routes from './routes';
import cors  from 'cors'
// import { isAuthenticated } from './middlewares/auth';
const app: Application = express();

app.use(cors())
app.use(express.json());
// app.use(isAuthenticated)

app.use('/api/v1', routes);

export default app;
