/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable comma-dangle */
import { Schema, model } from 'mongoose';
import slugify from 'slugify';
import { BlogModel, IBlog } from 'types/blog';

const blogSchema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        meta: {
            votes: {
                type: Number,
                default: 0,
            },
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);

blogSchema.pre('save', async function (next) {
    if (!this.isModified('title')) {
        return next();
    }

    const slugOptions = {
        lower: true,
        strict: true,
    };

    this.slug = slugify(this.title, slugOptions);

    let counter = 1;
    while (true) {
        const existingBlog = await Blog.findOne({ slug: this.slug });
        if (!existingBlog) {
            break;
        }
        this.slug = `${slugify(this.title, slugOptions)}-${counter}`;

        counter += 1;
    }

    next();
});

const Blog = model<IBlog, BlogModel>('Blog', blogSchema);

export default Blog;
