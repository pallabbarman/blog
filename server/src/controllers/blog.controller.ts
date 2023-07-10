/* eslint-disable import/prefer-default-export */
import { blogFilterableFields } from 'constants/blog';
import paginationFields from 'constants/pagination';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { allBlogs, newBlog, singleBlog } from 'services/blog.service';
import { IBlog } from 'types/blog';
import catchAsync from 'utils/catchAsync';
import pick from 'utils/pick';
import sendResponse from 'utils/sendResponse';

export const createBlog = catchAsync(async (req: Request, res: Response) => {
    const { ...blog } = req.body;

    const result = await newBlog(blog);

    sendResponse<IBlog>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog created successfully!',
        data: result,
    });
});

export const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, blogFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await allBlogs(filters, paginationOptions);

    sendResponse<IBlog[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blogs retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
});

export const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await singleBlog(id);

    sendResponse<IBlog>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog retrieved successfully!',
        data: result,
    });
});
