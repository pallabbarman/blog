// external imports
import express from 'express';
import blogRouter from './routers/blogs.js';
const app = express();
app.use(express.json());
// routers
app.use('/api/blogs', blogRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
