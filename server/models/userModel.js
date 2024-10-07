const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

})



UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
});


module.exports = mongoose.model('User', UserSchema);