import paginationFields from 'constants/pagination';
import { userFilterableFields } from 'constants/user';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { allUsers, singleUser } from 'services/user.service';
import { IUser } from 'types/user';
import catchAsync from 'utils/catchAsync';
import pick from 'utils/pick';
import sendResponse from 'utils/sendResponse';

export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, userFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await allUsers(filters, paginationOptions);

    sendResponse<IUser[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Users retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
});

export const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await singleUser(id);

    sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User retrieved successfully!',
        data: result,
    });
});
