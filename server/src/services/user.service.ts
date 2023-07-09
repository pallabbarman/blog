/* eslint-disable import/prefer-default-export */
import User from 'models/user.model';
import { IUser } from 'types/user';

export const newUser = async (payload: IUser): Promise<IUser | null> => {
    const result = await User.create(payload);

    return result;
};
