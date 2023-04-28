/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable object-curly-newline */
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import Blogs from '../models/blogs.js';
import User from '../models/user.js';

// update user
const updateUser = async (req: Request, res: Response) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    } else {
        res.status(401).json({ message: 'You can update only your account!' });
    }
};

// delete user
const deleteUser = async (req: Request, res: Response) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Blogs.deleteMany({ username: user?.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json({ message: 'User has been deleted!' });
            } catch (error) {
                res.status(500).json({ message: error });
            }
        } catch (error) {
            res.status(404).json({ message: 'User not found!' });
        }
    } else {
        res.status(401).json({ message: 'You can delete only your account!' });
    }
};

// get all users
const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// get single user
const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            const userObj = user.toObject();
            const { password, ...others } = userObj;
            res.status(200).json(others);
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export { updateUser, deleteUser, getUser, getUsers };
