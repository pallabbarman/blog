/* eslint-disable object-curly-newline */
import cors from 'cors';
import express from 'express';
import { authRouter, blogRouter, categoryRouter, usersRouter } from './routers/index.js';
const app = express();
app.use(cors());
app.use(express.json());
// routers
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/categories', categoryRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
