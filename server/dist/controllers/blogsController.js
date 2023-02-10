import Blogs from '../models/blogs.js';
const getBlogs = async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let blogs;
        if (username) {
            blogs = await Blogs.find({ username });
        }
        else if (catName) {
            blogs = await Blogs.find({
                categories: {
                    $in: [catName],
                },
            });
        }
        else {
            blogs = await Blogs.find();
        }
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
const getSingleBlog = async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.id);
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
const addBlogs = async (req, res) => {
    const newBlog = new Blogs(req.body);
    try {
        const saveBlog = await newBlog.save();
        res.status(200).json(saveBlog);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
const editBlog = async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.id);
        if (blog?.username === req.body.username) {
            try {
                const updateBlog = await Blogs.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, {
                    new: true,
                });
                res.status(200).json(updateBlog);
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }
        else {
            res.status(401).json({ message: 'You can update only your post!' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.id);
        if (blog?.username === req.body.username) {
            try {
                await blog?.delete();
                res.status(200).json({ message: 'Post has been deleted!' });
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }
        else {
            res.status(401).json({ message: 'You can delete only your post!' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
export { addBlogs, editBlog, deleteBlog, getSingleBlog, getBlogs };
