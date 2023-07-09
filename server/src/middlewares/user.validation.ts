/* eslint-disable import/prefer-default-export */
import { role } from 'constants/user';
import z from 'zod';

export const userValidation = z.object({
    body: z.object({
        name: z.object({
            firstName: z.string({
                required_error: 'First name is required',
            }),
            lastName: z.string({
                required_error: 'Last name is required',
            }),
        }),
        email: z
            .string({
                required_error: 'Email is required',
            })
            .email(),
        phoneNumber: z.string({
            required_error: 'Phone number is required!',
        }),
        role: z.enum([...role] as [string, ...string[]], {
            required_error: 'Gender is required',
        }),
        password: z.string({
            required_error: 'Password is required!',
        }),
        address: z.string({
            required_error: 'Address is required!',
        }),
        profileImage: z.string().optional(),
    }),
});
