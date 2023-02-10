/* eslint-disable comma-dangle */
import mongoose from 'mongoose';
const { Schema } = mongoose;
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
    },
}, {
    timestamps: true,
});
const Blogs = mongoose.model('Blogs', blogSchema);
export default Blogs;
