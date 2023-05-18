/* eslint-disable object-curly-newline */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { authRouter, blogRouter, categoryRouter, usersRouter } from './routers';

const app: Application = express();

app.use(cors());
app.use(express.json());

// routers
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/categories', categoryRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
