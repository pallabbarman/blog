// internal imports
import 'dotenv/config';
// external imports
import app from './app.js';
import connectWithDB from './mongoose.js';
// port
const { PORT } = process.env;
app.listen(PORT, () => {
    // database connection
    connectWithDB();
    console.log(`Listing on port http://localhost:${PORT}`);
});
