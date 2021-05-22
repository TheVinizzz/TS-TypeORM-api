import express from 'express';
import routes from './routes';
import Cors from 'cors';

const app = express();

app.use(Cors())
app.use(express.json());
app.use(routes);

export default app;
