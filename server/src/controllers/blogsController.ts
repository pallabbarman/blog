import { NextFunction, Request, Response } from 'express';

const addBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return console.log('Hello');
    } catch (error) {
        return next(error);
    }
};

export default { addBlogs };
