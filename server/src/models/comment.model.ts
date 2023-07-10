/* eslint-disable comma-dangle */
import { Schema, model } from 'mongoose';
import { CommentModel, IComment } from 'types/comment';

export const commentSchema = new Schema<IComment>(
    {
        comment: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        blog: {
            type: Schema.Types.ObjectId,
            ref: 'Blog',
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

const Comment = model<IComment, CommentModel>('Comment', commentSchema);

export default Comment;
