import { Model, Types } from 'mongoose';
import { IBlog } from './blog';
import { IUser } from './user';

export interface IComment {
    comment: string;
    user: Types.ObjectId | IUser;
    blog: Types.ObjectId | IBlog;
}

export type CommentModel = Model<IComment, Record<string, unknown>>;
