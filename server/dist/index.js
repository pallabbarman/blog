/* eslint-disable import/no-unresolved */
// internal imports
import 'dotenv/config';
// external imports
import app from './app.js';
// port
const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Listing on port http://localhost:${PORT}`);
});