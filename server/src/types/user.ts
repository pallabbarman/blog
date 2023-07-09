import { Model } from 'mongoose';

export interface UserName {
    firstName: string;
    lastName: string;
}

export interface IUser {
    name: UserName;
    role: 'admin' | 'author' | 'user';
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    profileImage?: string;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
