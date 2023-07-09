/* eslint-disable comma-dangle */
import { role } from 'constants/user';
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from 'types/user';

const userSchema = new Schema<IUser>(
    {
        name: {
            type: {
                firstName: {
                    type: String,
                    required: true,
                },
                lastName: {
                    type: String,
                    required: true,
                },
            },
            required: true,
            _id: false,
        },
        role: {
            type: String,
            enum: role,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: 0,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);

const User = model<IUser, UserModel>('User', userSchema);

export default User;
