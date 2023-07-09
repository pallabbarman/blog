/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { userSearchableFields } from 'constants/user';
import User from 'models/user.model';
import { SortOrder } from 'mongoose';
import { IPaginationOptions } from 'types/pagination';
import { IGenericResponse } from 'types/response';
import { IUser, IUserFilters } from 'types/user';
import calculatePagination from 'utils/pagination';

export const allUsers = async (
    filters: IUserFilters,
    paginationOption: IPaginationOptions
): Promise<IGenericResponse<IUser[]>> => {
    const { search, ...filtersData } = filters;

    const andConditions = [];

    if (search) {
        andConditions.push({
            $or: userSearchableFields.map((field) => ({
                [field]: {
                    $regex: search,
                    $options: 'i',
                },
            })),
        });
    }

    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }

    const { page, limit, skip, sortBy, sortOrder } = calculatePagination(paginationOption);

    const sortCondition: { [key: string]: SortOrder } = {};

    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }

    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};

    const result = await User.find(whereConditions).sort(sortCondition).skip(skip).limit(limit);

    const total = await User.countDocuments();

    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};

export const singleUser = async (id: string): Promise<IUser | null> => {
    const result = await User.findById(id);

    return result;
};
