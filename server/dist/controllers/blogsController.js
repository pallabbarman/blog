const addBlogs = async (req, res, next) => {
    try {
        return console.log('Hello');
    }
    catch (error) {
        return next(error);
    }
};
export default { addBlogs };
