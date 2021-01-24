import { Router } from 'express';
import classRouter from './class.routes';
import userRouter from './user.routes';
import authRouter from './auth.routes';

const routes = Router();

routes.use('/class', classRouter);
routes.use('/users', userRouter);
routes.use('/auth', authRouter);

export default routes;
