import { Model, Types } from 'mongoose';
import { IUser } from './user';

export interface IVotes {
    votes: number;
}

export interface IBlog {
    title: string;
    content: string;
    comment: string;
    thumbnail: string;
    slug: string;
    meta?: IVotes;
    user: Types.ObjectId | IUser;
}

export type BlogModel = Model<IBlog, Record<string, unknown>>;

export type IBlogFilters = {
    search?: string;
    meta?: IVotes;
};
