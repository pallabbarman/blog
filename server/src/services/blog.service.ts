/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { blogSearchableFields } from 'constants/blog';
import Blog from 'models/blog.model';
import { SortOrder } from 'mongoose';
import { IBlog, IBlogFilters } from 'types/blog';
import { IPaginationOptions } from 'types/pagination';
import { IGenericResponse } from 'types/response';
import calculatePagination from 'utils/pagination';

export const newBlog = async (payload: IBlog): Promise<IBlog | null> => {
    const result = (await Blog.create(payload)).populate('user');

    return result;
};

export const allBlogs = async (
    filters: IBlogFilters,
    paginationOption: IPaginationOptions
): Promise<IGenericResponse<IBlog[]>> => {
    const { search, ...filtersData } = filters;

    const andConditions = [];

    if (search) {
        andConditions.push({
            $or: blogSearchableFields.map((field) => ({
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

    const result = await Blog.find(whereConditions)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit)
        .populate('user')
        .populate('comment');

    const total = await Blog.countDocuments();

    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};

export const singleBlog = async (id: string): Promise<IBlog | null> => {
    const result = await Blog.findById(id).populate('user').populate('comment');

    return result;
};
