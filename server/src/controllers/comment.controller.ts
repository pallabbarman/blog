/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { newComments } from 'services/comment.service';
import { IBlog } from 'types/blog';
import catchAsync from 'utils/catchAsync';
import sendResponse from 'utils/sendResponse';

export const createComments = catchAsync(async (req: Request, res: Response) => {
    const { ...blog } = req.body;
    const { id } = req.params;

    const result = await newComments(blog, id);

    sendResponse<IBlog>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Comment added successfully!',
        data: result,
    });
});
