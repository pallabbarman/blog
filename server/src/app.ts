// external imports
import express, { Express, Request, Response } from 'express';
import blogRouter from './routers/blogs.js';

const app: Express = express();

app.use(express.json());

// routers
app.use('/api/blogs', blogRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
