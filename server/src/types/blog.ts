import { Model, Types } from 'mongoose';
import { IComment } from './comment';
import { IUser } from './user';

export interface IVotes {
    votes: number;
}

export interface IBlog {
    title: string;
    content: string;
    comment: Array<Types.ObjectId | IComment>;
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
