/* eslint-disable import/prefer-default-export */
import z from 'zod';

export const blogValidation = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is required',
        }),
        content: z.string({
            required_error: 'Content is required',
        }),
        comment: z
            .string({
                required_error: 'Phone number is required!',
            })
            .array(),
        thumbnail: z.string({
            required_error: 'Password is required!',
        }),
        meta: z
            .object({
                votes: z.number(),
            })
            .optional(),
        user: z.string({
            required_error: 'User is required',
        }),
    }),
});
