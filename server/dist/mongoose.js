import mongoose from 'mongoose';
// mongo connection url
const { MONGO_URL } = process.env;
// database connection
const connectWithDB = () => {
    mongoose.set('strictQuery', true);
    mongoose
        .connect(MONGO_URL)
        .then(() => console.log('database connection successful!'))
        .catch((err) => console.error(err));
};
export default connectWithDB;
