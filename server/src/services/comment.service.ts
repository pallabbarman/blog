/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import ApiError from 'errors/apiError';
import httpStatus from 'http-status';
import Blog from 'models/blog.model';
import Comment from 'models/comment.model';
import { Types } from 'mongoose';
import { IBlog } from 'types/blog';
import { IComment } from 'types/comment';

export const newComments = async (payload: IComment, id: string): Promise<IBlog | null> => {
    const comment = (await Comment.create(payload)).populate('user');
    const commentId = await (await comment)._id;

    if (!Types.ObjectId.isValid(id)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid blog ID');
    }

    const result = await Blog.findOneAndUpdate(
        { _id: id },
        { $push: { comment: commentId } },
        { new: true }
    )
        .populate('user')
        .populate('comment');

    return result;
};
