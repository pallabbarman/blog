import Category from '../models/Category.js';
// get all category
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
// add category
const addCategories = async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
// delete category
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        await category?.delete();
        res.status(200).json({ message: 'Category has been deleted!' });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
export { addCategories, getCategories, deleteCategory };
