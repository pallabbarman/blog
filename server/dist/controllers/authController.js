import bcrypt from 'bcrypt';
import User from '../models/User.js';
// register
const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).json({ message: 'Account created successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
// login
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: 'Wrong credentials!' });
        }
        else {
            const validated = await bcrypt.compare(req.body.password, user.password);
            if (!validated) {
                res.status(400).json({ message: 'Wrong credentials!' });
            }
            else {
                res.status(200).json({ message: 'Successfully login!' });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
export { register, login };
