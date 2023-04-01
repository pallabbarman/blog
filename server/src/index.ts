import 'dotenv/config';
import app from './app.js';
import connectWithDB from './mongoose.js';

// port
const { PORT } = process.env;

app.listen(PORT, () => {
    // database connection
    connectWithDB();

    console.log(`Listing on port http://localhost:${PORT}`);
});
