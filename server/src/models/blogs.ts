/* eslint-disable comma-dangle */
import { Schema, model } from 'mongoose';
import { blogObject } from '../types/blog.js';

const blogSchema = new Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

const Blogs = model<blogObject>('Blogs', blogSchema);

export default Blogs;
