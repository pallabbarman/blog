import Blogs from '../models/blogs.js';
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
export default addBlogs;
