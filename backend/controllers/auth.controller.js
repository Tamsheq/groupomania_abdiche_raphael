const UserModel = require('../models/user.model');

// destructuring
module.exports.signUp = async (req, res) => {
    console.log(req.body);
<<<<<<< HEAD
    const {pseudo, email, password } = req.body

    try {
        const user = await UserModel.create({pseudo, email, password });
        res.status(201).json({ user: user._id });
=======
    const {email, password} = req.body

    try {
        const user = await UserModel.create({email, password });
        res.status(201).json({ user: user._id});
>>>>>>> ddc8b2c8a145f5e2242a40163cebfbd36e1feb34
    }
    catch(err) {
        res.status(200).send({ err });
    }
};