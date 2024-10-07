const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password')
        res.json(users)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
}