// external imports
import express from 'express';
import { blogRouter, categoryRouter } from './routers/index.js';
const app = express();
app.use(express.json());
// routers
app.use('/api/blogs', blogRouter);
app.use('/api/categories', categoryRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
