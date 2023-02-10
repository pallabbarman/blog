// external imports
import mongoose from 'mongoose';

// env
const { MONGO_URL } = process.env;

// database connection
const connectWithDB = () => {
    mongoose.set('strictQuery', true);
    mongoose
        .connect(MONGO_URL as string)
        .then(() => console.log('database connection successful!'))
        .catch((err) => console.error(err));
};

export default connectWithDB;
