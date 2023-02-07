/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model('category', categorySchema);

export default Category;
